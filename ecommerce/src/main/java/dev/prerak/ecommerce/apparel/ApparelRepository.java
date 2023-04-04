package dev.prerak.ecommerce.apparel;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ApparelRepository extends MongoRepository<Apparel, ObjectId> {
    Optional<Apparel> findApparelByName(String name);
}
