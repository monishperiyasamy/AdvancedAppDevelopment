package com.example.bec.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.example.bec.model.UserModel;
import com.example.bec.service.UserService;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
@RequestMapping("/user")

public class UserController {

    @Autowired
    public UserService userservice;

    
    @PostMapping("/adduser")
    public UserModel createUserModel(@RequestBody UserModel user) {
        return userservice.createUser(user);
        }

      @GetMapping("/getAll")
    public List<UserModel> getAll() {
        return userservice.getAllUser();
    }
    
   
    @GetMapping("/getempbyemail/{email}")
    public ResponseEntity<UserModel> getUserByEmail(@PathVariable String email) {
        Optional<UserModel> UserModel = userservice.findByEmail(email);
        return UserModel.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{email}")
    public UserModel updateUser(@PathVariable String email, @RequestBody UserModel updatedUser) {
        return userservice.updateuserDetails(email, updateUser(null, null));
    }
    
}