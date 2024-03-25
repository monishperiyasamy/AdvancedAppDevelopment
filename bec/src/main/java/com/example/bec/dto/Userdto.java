package com.example.bec.Dto;

import com.example.bec.Model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDto {
private String username;
private String email;
private String password;
private String mobilenumber;
private Role roles;
}