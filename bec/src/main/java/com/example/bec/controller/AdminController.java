package com.example.bec.Controller;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.example.bec.Model.AdminModel;
import com.example.bec.Service.AdminService;

import com.example.bec.Dto.AdminDto;

import io.micrometer.common.lang.NonNull;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
@RequestMapping("/admin")

public class AdminController {

    @Autowired
    public AdminService AdminService;

    
    @PostMapping("/addAdmin")
    public AdminModel createAdminModel(@RequestBody AdminModel Admin) {
        return AdminService.createadmin(Admin);
        }

      @GetMapping("/getAll")
    public List<AdminModel> getAll() {
        return AdminService.getAlladmin();
    }
    @GetMapping("/getAdminbyId")
    public Optional<AdminModel> getAdminById(Long id)
    {
        return AdminService.findById(id);
    }
    public String getMethodName(@RequestParam String param) {
        return new String();
    }
    
    @GetMapping("/getAdminbyemail/{email}")
    public ResponseEntity<AdminModel> getAdminByEmail(@PathVariable String email) {
        Optional<AdminModel> AdminModel = AdminService.findByEmail(email);
        return AdminModel.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PutMapping("updateAdmin/{email}")
    public ResponseEntity<AdminModel> updateAdmin(@NonNull @PathVariable String email,
            @RequestBody AdminDto AdminDto) {
        AdminModel updated = AdminService.updateadminDetails(email, AdminDto);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }
    @DeleteMapping("deleteAdmin/{AdminId}")
    public ResponseEntity<Void> removeAdmin(@NonNull @PathVariable Long AdminId) {
        AdminService.deleteadmin(AdminId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
}


}


    
