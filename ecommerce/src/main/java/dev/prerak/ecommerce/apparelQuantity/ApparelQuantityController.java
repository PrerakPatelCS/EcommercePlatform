package dev.prerak.ecommerce.apparelQuantity;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("api/apparelQuantity")
public class ApparelQuantityController {
    @Autowired
    private ApparelQuantityService apparelQuantityService;

    @GetMapping("/all")
    public ResponseEntity<List<ApparelQuantity>> getAllApparelQuantities(){
        return new ResponseEntity<>(apparelQuantityService.getApparelQuantities(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<ApparelQuantity>> getSingleApparelQuantity(@PathVariable ObjectId id){
        return new ResponseEntity<>(apparelQuantityService.getSingleApparelQuantity(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ApparelQuantity> createApparelQuantity(@RequestBody Map<String, String> payload){
        return new ResponseEntity<ApparelQuantity>(apparelQuantityService.createApparelQuantity(payload.get("apparelName"),
                Integer.parseInt(payload.get("quantity")), payload.get("username")), HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{username}/{id}")
    public ResponseEntity<String> deleteApparelQuantity(@PathVariable String username, @PathVariable ObjectId id){
        return new ResponseEntity<>(apparelQuantityService.deleteApparelQuantity(username, id), HttpStatus.OK);
    }

}
