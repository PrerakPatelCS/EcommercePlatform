package dev.prerak.ecommerce.devLogs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DevLogService {
    @Autowired
    private DevLogRepository devLogRepository;

    public List<DevLog> getAllDevLogs(){
        return devLogRepository.findAll();
    }

    public DevLog createDevLog(String log){
        return devLogRepository.insert(new DevLog(log));
    }
}
