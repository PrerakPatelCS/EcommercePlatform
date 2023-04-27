package dev.prerak.ecommerce.user;

import dev.prerak.ecommerce.cart.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(userService.getUsers(), HttpStatus.OK);
    }

    @GetMapping("/{username}")
    public ResponseEntity<Optional<User>> getUser(@PathVariable String username){
        return new ResponseEntity<Optional<User>>(userService.getUser(username), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<User> createCart(@RequestBody Map<String, String> payload){
        return new ResponseEntity<User>(userService.createUser(payload.get("username"), payload.get("password"),
        payload.get("role")), HttpStatus.CREATED);
    }

    @GetMapping("/login/{username}/{password}")
    public ResponseEntity<User> login(@PathVariable String username, @PathVariable String password){
        return new ResponseEntity<User>(userService.login(username, password), HttpStatus.OK);
    }
}
