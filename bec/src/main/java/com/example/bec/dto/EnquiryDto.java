package com.example.bec.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EnquiryDto {
    private String coursename;
    private String description;
    private String email;
    private String enquiryType;
}
