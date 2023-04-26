package dev.prerak.ecommerce.apparelQuantity;

import dev.prerak.ecommerce.user.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApparelQuantityRepository extends MongoRepository<ApparelQuantity, ObjectId> {

}
