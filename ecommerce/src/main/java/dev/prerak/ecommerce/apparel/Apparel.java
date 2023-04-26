package dev.prerak.ecommerce.apparel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "apparel")
@Data // Makes all Getters and Setters
@AllArgsConstructor // Makes a constructor will all the arguments
@NoArgsConstructor // Makes a default constructor
public class Apparel {
    @Id
    private ObjectId id;
    private String name;
    private String description;
    private double price;
    private String imageUrl;
    private String category;

    public Apparel(String name, String description, double price, String imageUrl, String category) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
        this.category = category;
    }


}
