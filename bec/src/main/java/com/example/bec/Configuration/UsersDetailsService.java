package com.example.bec.Configuration;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.userdetails.UserDetailsPasswordService;
import org.springframework.stereotype.Component;
import org.springframework.security.core.userdetails.User;
import com.example.bec.Model.UserModel;
import com.example.bec.Repository.Userrepo;

@Component
public class UsersDetailsService implements UserDetailsService, UserDetailsPasswordService {

    @Autowired
    private Userrepo repository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserModel> userReg = repository.findByUsername(username);
        return userReg.map(UsersDetails::new)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
    }
    @Override
    public UserDetails updatePassword(UserDetails user, String newPassword) {
        // Implement password update logic here
        // For example, you can update the user's password in the database
        throw new UnsupportedOperationException("Unimplemented method 'updatePassword'");
    }
}
