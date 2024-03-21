@Configuration
@RequiredArgs



userdetailsservice

UserDetailsService (predefined class) --> loadbyusername 
@Override
public Userdetails



UserDetails (predefined) --> (to give authority and access based on roles)
   GrantedAutority --> it defines whether the user based on role 



AuthenticationProvider ( which needs ->)(dao authentiaction provider needs UserDetailsService)