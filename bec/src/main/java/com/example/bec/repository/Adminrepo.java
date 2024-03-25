package com.example.bec.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bec.Model.AdminModel;



public interface Adminrepo extends JpaRepository<AdminModel,Long>{

    Optional<AdminModel> findByEmail(String email);
}