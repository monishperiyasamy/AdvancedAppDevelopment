package com.example.bec.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bec.Model.EnquiryModel;

@Repository
public interface EnquiryRepository extends JpaRepository<EnquiryModel, Long> {
}
