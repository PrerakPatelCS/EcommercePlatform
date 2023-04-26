package dev.prerak.ecommerce.devLogs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/devlog")
public class DevLogController {

    @Autowired
    private DevLogService devLogService;

    @GetMapping("/all")
    public ResponseEntity<List<DevLog>> getAllDevLogs(){
        return new ResponseEntity<List<DevLog>>(devLogService.getAllDevLogs(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<DevLog> createDevLog(@RequestBody Map<String, String> payload){
        return new ResponseEntity<>(devLogService.createDevLog(payload.get("log")), HttpStatus.CREATED);
    }
}
