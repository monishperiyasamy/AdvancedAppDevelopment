package com.example.bec.Controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.bec.Dto.PaymentDto;
import com.example.bec.Model.CourseModel;
import com.example.bec.Model.PaymentModel;
import com.example.bec.Model.UserModel;
import com.example.bec.Service.PaymentService;

import java.util.List;

@RestController
@RequestMapping("/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/makePayment")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<PaymentModel> makePayment(@RequestBody PaymentDto paymentDto) {
        if (paymentDto.getModeOfPayment() == null || paymentDto.getModeOfPayment().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        // Here you would typically fetch the user and course information
        // For demonstration purposes, let's assume we have dummy data
        UserModel user = new UserModel(); // replace with actual user retrieval
        CourseModel course = new CourseModel(); // replace with actual course retrieval

        if (user == null || course == null) {
            return ResponseEntity.badRequest().build();
        }

        PaymentModel payment = paymentService.makePayment(user, course, paymentDto.getModeOfPayment());
        return ResponseEntity.ok(payment);
    }

    @GetMapping("/getAllPayments")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<PaymentModel>> getAllPayments() {
        List<PaymentModel> payments = paymentService.getAllPayments();
        return ResponseEntity.ok(payments);
    }

    // Other controller methods as per your requirements
}
