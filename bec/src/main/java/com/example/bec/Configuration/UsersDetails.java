// package com.example.bec.Configuration;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.core.userdetails.User;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.stereotype.Component;

// import com.example.bec.Model.UserModel;
// import com.example.bec.Repository.Userrepo;

// import java.util.Optional;

// @Component
// public class UsersDetails implements UserDetailsService {

//     @Autowired
//     private Userrepo repository;

//     @Override
//     public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//         Optional<UserModel> userInfo = repository.findByEmail(username);
//         return userInfo.map(userModel ->
//                 User.withUsername(userModel.getUsername())
//                     .password(userModel.getPassword())
//                     .roles(userModel.getRole())
//                     .build()
//         ).orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
//     }
// }

package com.example.bec.Configuration;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.bec.Model.UserModel;

public class UsersDetails implements UserDetails {
    private String username;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;

    public UsersDetails(UserModel userInfo) {
        username = userInfo.getUsername();
        password = userInfo.getPassword();
        authorities = Collections.singleton(new SimpleGrantedAuthority(userInfo.getRoles().name()));
        System.out.println(authorities);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}