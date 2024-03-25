package com.example.bec.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bec.Model.CourseModel;
import com.example.bec.Model.PaymentModel;
import com.example.bec.Model.UserModel;
import com.example.bec.Repository.PaymentRepository;

@Service
public class PaymentService {
    @Autowired
    private PaymentRepository paymentRepository;

    public PaymentModel makePayment(UserModel user, CourseModel course, String modeOfPayment) {
        PaymentModel payment = new PaymentModel();
        payment.setUser(user);
        payment.setCourse(course);
        payment.setPaid(false);
        payment.setModeOfPayment(modeOfPayment);
        return paymentRepository.save(payment);
    }

    public List<PaymentModel> getAllPayments() {
        return paymentRepository.findAll();
    }

  
}
