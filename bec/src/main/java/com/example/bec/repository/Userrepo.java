package com.example.bec.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bec.model.UserModel;


public interface Userrepo extends JpaRepository<UserModel,Long>{

    Optional<UserModel> findByEmail(String email);
}