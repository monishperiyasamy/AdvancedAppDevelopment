package com.example.bec.Controller;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RestController;

import com.example.bec.Model.UserModel;
import com.example.bec.Service.UserService;
import com.example.bec.Dto.UserDto;

import io.micrometer.common.lang.NonNull;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.DeleteMapping;
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

    
        @GetMapping("/getAll")
        @PreAuthorize("hasAuthority('USER')")
    public List<UserModel> getAll() {
        return userservice.getAllUser();
    }
    @GetMapping("/getuserbyId")
    @PreAuthorize("hasAuthority('ADMIN')")
    public Optional<UserModel> getUserById(Long id)
    {
        return userservice.findById(id);
    }
    public String getMethodName(@RequestParam String param) {
        return new String();
    }
    
    @GetMapping("/getuserbyemail/{email}")
    @PreAuthorize("hasAuthority('ADMIN','USER')")
    public ResponseEntity<UserModel> getUserByEmail(@PathVariable String email) {
        Optional<UserModel> UserModel = userservice.findByEmail(email);
        return UserModel.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PutMapping("/updateUser/{email}")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<UserModel> updateUser(@NonNull @PathVariable String email,
            @RequestBody UserDto userDto) {
        UserModel updated = userservice.updateuserDetails(email, userDto);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }
    @DeleteMapping("/deleteUser/{userId}")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<Void> removeUser(@NonNull @PathVariable Long userId) {
        userservice.deleteuser(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
}
}


    
