package dev.prerak.ecommerce.apparelQuantity;

import dev.prerak.ecommerce.apparel.Apparel;
import dev.prerak.ecommerce.apparel.ApparelService;
import dev.prerak.ecommerce.cart.Cart;
import dev.prerak.ecommerce.cart.CartService;
import dev.prerak.ecommerce.user.User;
import dev.prerak.ecommerce.user.UserService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.List;
import java.util.Optional;

@Service
public class ApparelQuantityService {

    private final static double TAX = 1.0625;
    private DecimalFormat df = new DecimalFormat("#.##");
    @Autowired
    private ApparelQuantityRepository apparelQuantityRepository;

    @Autowired
    private ApparelService apparelService;

    @Autowired
    private UserService userService;

    @Autowired
    private CartService cartService;

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<ApparelQuantity> getApparelQuantities(){
        return apparelQuantityRepository.findAll();
    }

    public Optional<ApparelQuantity> getSingleApparelQuantity(ObjectId objectId){
        return apparelQuantityRepository.findById(objectId);
    }


    public ApparelQuantity createApparelQuantity(String apparelName, int quantity, String username) {
        Apparel apparel = apparelService.getApparel(apparelName).orElse(null);
        ApparelQuantity apparelQuantity = apparelQuantityRepository.insert(new ApparelQuantity(apparel, quantity));
        apparelQuantity.setHexStringId(apparelQuantity.getId().toHexString());
        mongoTemplate.save(apparelQuantity);

        double subtotal = Double.parseDouble(df.format(apparel.getPrice() * quantity));
        double total = Double.parseDouble(df.format(subtotal * TAX));

        User user = userService.getUser(username).orElse(null);

        Cart cart = user.getCart();
        cart.setSubtotal(cart.getSubtotal() + subtotal);
        cart.setTotal(cart.getTotal() + total);
        cart.getApparelIds().add(apparelQuantity);

        mongoTemplate.save(cart);

        return apparelQuantity;
    }


    public String deleteApparelQuantity(String username, ObjectId id) {
        User user = userService.getUser(username).orElse(null);
        Cart cart = user.getCart();

        List<ApparelQuantity> apparelQuantities = cart.getApparelIds();
        ApparelQuantity apparelQuantity = new ApparelQuantity();
        for(ApparelQuantity aq : apparelQuantities){
            if(aq.getId().equals(id)){
                apparelQuantity = aq;
                apparelQuantities.remove(aq);
                break;
            }
        }

        Apparel apparel = apparelQuantity.getApparel();
        Double subtotal = Double.parseDouble(df.format(apparel.getPrice() * apparelQuantity.getQuantity()));
        Double total = Double.parseDouble(df.format(subtotal * TAX));
        cart.setSubtotal(cart.getSubtotal() - subtotal);
        cart.setTotal(cart.getTotal() - total);
        mongoTemplate.save(cart);
        mongoTemplate.remove(Query.query(Criteria.where("id").is(id)), ApparelQuantity.class);
        return "Deleted";
    }

}
