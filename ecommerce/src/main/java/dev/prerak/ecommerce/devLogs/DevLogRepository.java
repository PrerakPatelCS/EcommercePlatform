package dev.prerak.ecommerce.devLogs;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DevLogRepository extends MongoRepository<DevLog, ObjectId> {
}
