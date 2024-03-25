package com.example.bec.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bec.Model.UserModel;


public interface Userrepo extends JpaRepository<UserModel,Long>{

    Optional<UserModel> findByEmail(String email);
}