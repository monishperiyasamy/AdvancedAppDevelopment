package com.example.bec.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import io.micrometer.common.lang.NonNull;

import com.example.bec.dto.UserDto;
import com.example.bec.model.UserModel;
import com.example.bec.repository.Userrepo;

@Service
public class UserService {

    @Autowired 
    public Userrepo userrepo;

    //signup_user
    public  UserModel createUser(@NonNull UserModel user)
    {
          return userrepo.save(user);

    }
    //retrive_userDetails
    public List<UserModel> getAllUser()
    {
        return userrepo.findAll();
    }
    //retrive_userByEmail
    public Optional<UserModel> findByEmail(String email)
    {
        return userrepo.findByEmail(email);
    }
    //Update_userDetails(only the fields given in dto)
    public UserModel updateuserDetails(@NonNull String email, UserModel updatedUser)
    {
        return userrepo.findByEmail(email)
             .map(e->{
                e.setEmail(updatedUser.getEmail());
                e.setPassword(updatedUser.getPassword());
                e.setMobilenumber(updatedUser.getMobilenumber());
                return userrepo.save(e);
             })
             .orElseThrow(()-> new RuntimeException("User not found"));
    }

    
}
