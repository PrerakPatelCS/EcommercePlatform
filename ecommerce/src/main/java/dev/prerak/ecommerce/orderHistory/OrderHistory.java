package dev.prerak.ecommerce.orderHistory;

import dev.prerak.ecommerce.cart.Cart;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "orderHistory")
@Data // Makes all Getters and Setters
@AllArgsConstructor // Makes a constructor will all the arguments
@NoArgsConstructor // Makes a default constructor
public class OrderHistory {
    @Id
    private ObjectId id;
    @DocumentReference
    private List<Cart> cartIds;

}
