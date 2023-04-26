package dev.prerak.ecommerce.orderHistory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/orderHistory")
public class OrderHistoryController {

    @Autowired
    private OrderHistoryService orderHistoryService;

    @GetMapping("/all")
    public ResponseEntity<List<OrderHistory>> getAllOrderHistory(){
        return new ResponseEntity<>(orderHistoryService.getOrderHistories(), HttpStatus.OK);
    }

    @GetMapping("/{username}")
    public ResponseEntity<Optional<OrderHistory>> getSingleOrderHistory(@PathVariable String username){
        return new ResponseEntity<>(orderHistoryService.getSingleOrderHistory(username), HttpStatus.OK);
    }


    @PutMapping("/{username}")
    public ResponseEntity<OrderHistory> addCartToOrderHistory(@PathVariable String username){
        return new ResponseEntity<>(orderHistoryService.addCart(username), HttpStatus.OK);
    }

}
