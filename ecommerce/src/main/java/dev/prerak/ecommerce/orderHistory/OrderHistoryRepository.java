package dev.prerak.ecommerce.orderHistory;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderHistoryRepository extends MongoRepository<OrderHistory, ObjectId> {
}
