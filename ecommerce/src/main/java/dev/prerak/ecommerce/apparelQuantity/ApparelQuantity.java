package dev.prerak.ecommerce.apparelQuantity;

import dev.prerak.ecommerce.apparel.Apparel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

@Document(collection = "apparelQuantity")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApparelQuantity {
    @Id
    private ObjectId id;
    private String hexStringId;
    @DocumentReference
    private Apparel apparel;
    private int quantity;

    public ApparelQuantity(Apparel apparel, int quantity) {
        this.apparel = apparel;
        this.quantity = quantity;
    }
}
