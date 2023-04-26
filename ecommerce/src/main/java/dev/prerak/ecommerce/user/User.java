package dev.prerak.ecommerce.user;

import dev.prerak.ecommerce.cart.Cart;
import dev.prerak.ecommerce.orderHistory.OrderHistory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "user")
@Data // Makes all Getters and Setters
@AllArgsConstructor // Makes a constructor will all the arguments
@NoArgsConstructor // Makes a default constructor
public class User {
    @Id
    private ObjectId id;
    private String username;
    private String password;
    private String role;
    @DocumentReference
    private Cart cart;
    @DocumentReference
    private OrderHistory orderHistory;

    public User(String username, String password, String role, Cart cart, OrderHistory orderHistory) {
        this.username = username;
        this.password = password;
        this.role = role;
        this.cart = cart;
        this.orderHistory = orderHistory;
    }
}
