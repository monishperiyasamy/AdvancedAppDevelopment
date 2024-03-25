package com.example.bec.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bec.Model.PaymentModel;

@Repository
public interface PaymentRepository extends JpaRepository<PaymentModel, Long> {
}
