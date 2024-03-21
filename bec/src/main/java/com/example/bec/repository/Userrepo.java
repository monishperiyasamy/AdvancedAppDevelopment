package com.example.bec.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bec.model.User;

public interface Userrepo extends JpaRepository<User,Long>{
}