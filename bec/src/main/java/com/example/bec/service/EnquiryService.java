package com.example.bec.Service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bec.Dto.EnquiryDto;
import com.example.bec.Model.EnquiryModel;
import com.example.bec.Repository.EnquiryRepository;

@Service
public class EnquiryService {
    @Autowired
    private EnquiryRepository enquiryRepository;

    public EnquiryModel submitEnquiry(EnquiryDto enquiryDto) {
        EnquiryModel enquiry = new EnquiryModel();
        enquiry.setCoursename(enquiryDto.getCoursename());
        enquiry.setDescription(enquiryDto.getDescription());
        enquiry.setEmail(enquiryDto.getEmail());
        enquiry.setEnquiryType(enquiryDto.getEnquiryType());
        return enquiryRepository.save(enquiry);
    }
    public List<EnquiryModel> getAllEnquiries() {
        return enquiryRepository.findAll();
    }

}
