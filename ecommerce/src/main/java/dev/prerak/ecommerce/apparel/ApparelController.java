package dev.prerak.ecommerce.apparel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/apparel")
public class ApparelController {
    @Autowired
    private ApparelService apparelService;

    @GetMapping("/all")
    public ResponseEntity<List<Apparel>> getAllApparel(){
        return new ResponseEntity<>(apparelService.allApparel(), HttpStatus.OK);
    }

    @GetMapping("/{name}")
    public ResponseEntity<Optional<Apparel>> getSingleApparel(@PathVariable String name){
        return new ResponseEntity<>(apparelService.getApparel(name), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Apparel> createApparel(@RequestBody Map<String, String> payload){
        return new ResponseEntity<Apparel>(apparelService.createApparel(
                payload.get("name"), payload.get("description"), Double.parseDouble(payload.get("price")), payload.get("imageUrl"), payload.get("category")),
                HttpStatus.CREATED);
    }
}
