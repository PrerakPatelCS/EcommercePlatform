package dev.prerak.ecommerce.cart;

import dev.prerak.ecommerce.apparel.Apparel;
import dev.prerak.ecommerce.apparelQuantity.ApparelQuantity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "cart")
@Data // Makes all Getters and Setters
@AllArgsConstructor // Makes a constructor will all the arguments
@NoArgsConstructor // Makes a default constructor
public class Cart {
    @Id
    private ObjectId id;
    @DocumentReference // Only stores apparelQuantities objectId's
    private List<ApparelQuantity> apparelIds;
    private double subtotal;
    private double total;
    private LocalDateTime dateOrdered;

    public Cart(List<ApparelQuantity> apparelIds, double subtotal, double total, LocalDateTime dateOrdered) {
        this.apparelIds = apparelIds;
        this.subtotal = subtotal;
        this.total = total;
        this.dateOrdered = dateOrdered;
    }
}
