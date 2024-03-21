@Configuration
// to access functionality of web application security
@EnableWebSecurity 
@EnableMethodSecurity


//dependency's  -->spring boot starter security ( can't access any page without autheticate -> automatically redirect to login form)

// JWT (jjwt) [3 dependency]-> encrypted method (to set time limit for user in application for login ( header ( token active,expires time), payload(user's data) , encryption algo( has based algorithm)))

//open api starter (for swagger)

//postergres dependency
public class SecurityConfiguration
{
  
    @Bean 
  public  SecurityFilterChain sfc (HttpSecurity http) throws Exception{// all security implementation
 {
    return http
              .csrf(AbstractHttpConfig::disable)// cross site request forgery --> provide authentication
              .authorizeHttpRequest(
                 req->req.requestMatches(...patterns: "/createUser", "/home"). permitAll())// disabling csrf for creating account

                 .authorizeHttpRequest(
                    req->req.requestMatches(...patterns:"/user/**", "/")
                    .autheticated()
                 )

                 //session management

            
                 
              )
 }





}