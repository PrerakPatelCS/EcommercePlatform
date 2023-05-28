package dev.prerak.ecommerce.user;

import dev.prerak.ecommerce.cart.Cart;
import dev.prerak.ecommerce.cart.CartService;
import dev.prerak.ecommerce.orderHistory.OrderHistory;
import dev.prerak.ecommerce.orderHistory.OrderHistoryService;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CartService cartService;

    @Autowired
    private OrderHistoryService orderHistoryService;

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public Optional<User> getUser(String username){
        return userRepository.findUserByusername(username);
    }


    public User createUser(String username, String password, String role){
        // Username Taken?
        if(userRepository.findUserByusername(username).orElse(null) != null){
            return null;
        }
        String encrypt = DigestUtils.sha256Hex(password);
        Cart cart = cartService.createCart();
        OrderHistory orderHistory = orderHistoryService.createOrderHistory();
        User user = userRepository.insert(new User(username, encrypt, role, cart, orderHistory));

        return user;
    }

    public User login(String username, String password){
        User user = userRepository.findUserByusername(username).orElse(null);
        if(user == null){
            return null;
        }
        String encrypt = DigestUtils.sha256Hex(password);
        if(!user.getPassword().equals(encrypt)){
            return null;
        }
        return user;
    }

    public User createSession(){
        Cart cart = cartService.createCart();
        OrderHistory orderHistory = orderHistoryService.createOrderHistory();
        User user = userRepository.insert(new User("","","guest",cart, orderHistory));
        user.setUsername(user.getId().toHexString());
        mongoTemplate.save(user);

        return user;
    }
}
