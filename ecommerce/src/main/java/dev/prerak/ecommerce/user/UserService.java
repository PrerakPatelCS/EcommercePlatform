package dev.prerak.ecommerce.user;

import dev.prerak.ecommerce.cart.Cart;
import dev.prerak.ecommerce.cart.CartService;
import dev.prerak.ecommerce.orderHistory.OrderHistory;
import dev.prerak.ecommerce.orderHistory.OrderHistoryService;
import org.springframework.beans.factory.annotation.Autowired;

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

    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public Optional<User> getUser(String username){
        return userRepository.findUserByusername(username);
    }


    public User createUser(String username, String password, String role){
        Cart cart = cartService.createCart();
        OrderHistory orderHistory = orderHistoryService.createOrderHistory();
        User user = userRepository.insert(new User(username, password, role, cart, orderHistory));

        return user;
    }
}
