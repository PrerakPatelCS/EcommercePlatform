package dev.prerak.ecommerce.cart;

import dev.prerak.ecommerce.user.User;
import dev.prerak.ecommerce.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.mongodb.core.MongoTemplate;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    private UserService userService;

    public CartService(@Lazy UserService userService) {
        this.userService = userService;
    }

    public List<Cart> getCarts(){
        return cartRepository.findAll();
    }

    public Optional<Cart> getSingleCart(String username){
        User user = userService.getUser(username).orElse(null);
        return cartRepository.findById(user.getCart().getId());
    }

    public Cart createCart(){
        return cartRepository.insert(new Cart(new ArrayList<>(), 0.0, 0.0, LocalDateTime.now()));
    }
}
