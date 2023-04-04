package dev.prerak.ecommerce.user;

import dev.prerak.ecommerce.cart.Cart;
import dev.prerak.ecommerce.orderHistory.OrderHistory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

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
    private Cart cart;
    private List<OrderHistory> orderHistory;
}
