package com.hotel.lodge.travel.controller;

import com.hotel.lodge.travel.db.Entity.User;
import com.hotel.lodge.travel.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController

@RequestMapping("/")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping("/up")
    public String hello(){
        return "Hello";
    }

    @PostMapping("/save")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        User userResponse = userService.save(user);
        System.out.println("--------------------"+user);
        return new ResponseEntity<>(userResponse, HttpStatus.CREATED);
    }


}
