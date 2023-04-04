package dev.prerak.ecommerce.cart;

import dev.prerak.ecommerce.apparel.Apparel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "cart")
@Data // Makes all Getters and Setters
@AllArgsConstructor // Makes a constructor will all the arguments
@NoArgsConstructor // Makes a default constructor
public class Cart {
    @Id
    private ObjectId id;
    private List<Apparel> apparel;
    private double subtotal;
    private double total;
    private LocalDateTime dateCreated;

}
