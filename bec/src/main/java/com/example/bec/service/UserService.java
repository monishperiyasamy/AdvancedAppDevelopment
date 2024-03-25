package com.example.bec.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import io.micrometer.common.lang.NonNull;

import com.example.bec.Dto.UserDto;
import com.example.bec.Model.UserModel;
import com.example.bec.Repository.Userrepo;

@Service
public class UserService {

    @Autowired 
    public Userrepo userrepo;
    @Autowired
    private PasswordEncoder pass;

    //signup_user
    public  UserModel createUser(@NonNull UserModel user)
    {     user.setPassword(pass.encode(user.getPassword()));
          return userrepo.save(user);

    }
    //retrive_userDetails
    public List<UserModel> getAllUser()
    {
        return userrepo.findAll();
    }

    //retive_userById
    public Optional<UserModel> findById(Long id)
    {
        return userrepo.findById(id);
    }
    //retrive_userByEmail
    public Optional<UserModel> findByEmail(String email)
    {
        return userrepo.findByEmail(email);
    }
    //Update_userDetails(only the fields given in dto)
    public UserModel updateuserDetails(@NonNull String email, UserDto updatedUser)
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
    //deleteuser 
    public void deleteuser(@NonNull Long id){
            userrepo.deleteById(id);
    }
    

    
}
