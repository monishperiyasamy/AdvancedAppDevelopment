package com.example.bec.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.bec.Model.UserModel;
import com.example.bec.Dto.AuthRequest;
import com.example.bec.Dto.AuthResponse;
import com.example.bec.Dto.UserDto;
import com.example.bec.Repository.Userrepo;
import com.example.bec.Service.AuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    @Autowired
	private Userrepo userRegisterRepository;
    private final AuthService service;
	@PostMapping("/register")
	 public ResponseEntity<String> register(
		      @RequestBody UserDto request
		  ) {
		service.register(request);
		    return ResponseEntity.ok("Registered Successfully");
		  }
	@GetMapping("/getregister")
	public List<UserModel> getregister()
	{
		return userRegisterRepository.findAll();
		
	}

		  @PostMapping("/authentication")
		  public ResponseEntity<AuthResponse> authenticate(@RequestBody AuthRequest request)
		  {
			return ResponseEntity.ok(service.authenticate(request));
			  
		  }
    
}