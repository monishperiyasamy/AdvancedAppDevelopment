@Service


@Autowired

//to get all User
public List<User> getAllUser()
{
   return userrepo.findAll();
}

//update

public User update (@NonNull String email, UpdateRequest updaterequest)
{
    return userrepo.findByEmail(email)
    {
        .map(existingUser ->{
            
            existingUser.setEmail(updaterequest.getEmail());
            existingUser.setMobilenumber(updaterequest.getMobilenumber());

            return userrepo.save(existingUser);
            
        })
        .orElseThrow9

    }
}

//delete

public void removeuser(@NonNull Integer userId)
{
       userrepo.delete(userId);
}
