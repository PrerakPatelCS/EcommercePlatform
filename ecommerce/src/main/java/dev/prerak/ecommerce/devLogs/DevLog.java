package dev.prerak.ecommerce.devLogs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "DevLog")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DevLog {
    @Id
    private ObjectId id;
    private LocalDateTime localDateTime;
    private String log;

    public DevLog(String log) {
        this.localDateTime = LocalDateTime.now();
        this.log = log;
    }
}
