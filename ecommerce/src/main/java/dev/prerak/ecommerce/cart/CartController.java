package dev.prerak.ecommerce.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("/all")
    public ResponseEntity<List<Cart>> getAllUsers(){
        return new ResponseEntity<>(cartService.getCarts(), HttpStatus.OK);
    }


    @GetMapping("/{username}")
    public ResponseEntity<Optional<Cart>> getSingleCart(@PathVariable String username){
        return new ResponseEntity<>(cartService.getSingleCart(username), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Cart> createCart(){
        return new ResponseEntity<Cart>(cartService.createCart(), HttpStatus.CREATED);
    }

}
