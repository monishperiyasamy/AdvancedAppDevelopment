package com.example.bec.Service;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import io.micrometer.common.lang.NonNull;
import com.example.bec.Dto.AdminDto;
import com.example.bec.Model.AdminModel;
import com.example.bec.Repository.Adminrepo;


@Service
public class AdminService {

    @Autowired 
    public Adminrepo adminrepo;

    //signup_admin
    public  AdminModel createadmin(@NonNull AdminModel admin)
    {
          return adminrepo.save(admin);

    }
    //retrive_adminDetails
    public List<AdminModel> getAlladmin()
    {
        return adminrepo.findAll();
    }

    //retive_adminById
    public Optional<AdminModel> findById(Long id)
    {
        return adminrepo.findById(id);
    }
    //retrive_adminByEmail
    public Optional<AdminModel> findByEmail(String email)
    {
        return adminrepo.findByEmail(email);
    }
    //Update_adminDetails(only the fields given in dto)
    public AdminModel updateadminDetails(@NonNull String email, AdminDto updatedadmin)
    {
        return adminrepo.findByEmail(email)
             .map(e->{
                e.setEmail(updatedadmin.getEmail());
                e.setPassword(updatedadmin.getPassword());
                e.setMobilenumber(updatedadmin.getMobilenumber());
                return adminrepo.save(e);
             })
             .orElseThrow(()-> new RuntimeException("admin not found"));
    }
    //deleteadmin 
    public void deleteadmin(@NonNull Long id){
            adminrepo.deleteById(id);
    }
    

    
}
