package dev.prerak.ecommerce.orderHistory;

import dev.prerak.ecommerce.cart.Cart;
import dev.prerak.ecommerce.cart.CartService;
import dev.prerak.ecommerce.user.User;
import dev.prerak.ecommerce.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.mongodb.core.MongoTemplate;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class OrderHistoryService {
    @Autowired
    private OrderHistoryRepository orderHistoryRepository;

    @Autowired
    private CartService cartService;

    @Autowired
    private MongoTemplate mongoTemplate;

    private UserService userService;

    public OrderHistoryService(@Lazy UserService userService){
        this.userService = userService;
    }

    public List<OrderHistory> getOrderHistories(){
        return orderHistoryRepository.findAll();
    }

    @Lazy
    public Optional<OrderHistory> getSingleOrderHistory(String username){
        User user = userService.getUser(username).orElse(null);
        return orderHistoryRepository.findById(user.getOrderHistory().getId());
    }

    public OrderHistory addCart(String username){
        User user = userService.getUser(username).orElse(null);

        OrderHistory orderHistory = user.getOrderHistory();
        Cart cart = user.getCart();

        cart.setDateOrdered(LocalDateTime.now());
        orderHistory.getCartIds().add(cart);

        mongoTemplate.save(cart);
        mongoTemplate.save(orderHistory);

        Cart newCart = cartService.createCart();
        user.setCart(newCart);
        mongoTemplate.save(user);

        return orderHistoryRepository.save(orderHistory);
    }

    public OrderHistory createOrderHistory(){
        return orderHistoryRepository.insert(new OrderHistory());
    }
}
