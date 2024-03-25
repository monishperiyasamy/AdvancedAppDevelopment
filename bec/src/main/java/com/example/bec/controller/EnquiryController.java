package com.example.bec.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bec.Dto.EnquiryDto;
import com.example.bec.Model.EnquiryModel;
import com.example.bec.Service.EnquiryService;

@RestController
@RequestMapping("/enquiry")
public class EnquiryController {
    @Autowired
    private EnquiryService enquiryService;

    @PostMapping("/submit")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<EnquiryModel> submitEnquiry(@RequestBody EnquiryDto enquiryDto) {
        EnquiryModel enquiry = enquiryService.submitEnquiry(enquiryDto);
        return ResponseEntity.ok(enquiry);
    }

    @GetMapping("/all")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<EnquiryModel>> getAllEnquiries() {
        List<EnquiryModel> enquiries = enquiryService.getAllEnquiries();
        return ResponseEntity.ok(enquiries);
    }
}
