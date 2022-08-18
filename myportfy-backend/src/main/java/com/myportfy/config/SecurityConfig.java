package com.myportfy.config;

import com.myportfy.config.jwt.JWTAuthenticationFilter;
import com.myportfy.config.jwt.JWTAuthorizationFilter;
import com.myportfy.config.jwt.JwtUtil;
import com.myportfy.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

import static org.springframework.http.HttpMethod.*;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private Environment environment;
    @Autowired @Lazy //Circular Dependency
    private IUserService userService;
    @Autowired
    private JwtUtil jwtUtil;

    @Value("${FrontBaseURL}")
    private String ALLOWED_ORIGINS;

    private static final String[] PUBLIC_MATCHERS = {
            "/h2-console/**"
    };

    private static final String[] PUBLIC_MATCHERS_GET = {
            "/users/confirm-account",
            "/emails/send-reactivate-user",
            "/users/reactivate-user"
    };

    private static final String[] PUBLIC_MATCHERS_POST = {
            "/users",
            "/auth/forgot-password",
    };

    private static final String[] PUBLIC_MATCHERS_PUT = {
            "/users/reset-password"
    };

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService).passwordEncoder(bCryptPasswordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        if (Arrays.asList(environment.getActiveProfiles()).contains("test")) {
            http.headers().frameOptions().disable();
        }
        http.cors().and().csrf().disable();
        http.authorizeHttpRequests()
                .antMatchers(POST, PUBLIC_MATCHERS_POST).permitAll()
                .antMatchers(PUT, PUBLIC_MATCHERS_PUT).permitAll()
                .antMatchers(GET, PUBLIC_MATCHERS_GET).permitAll()
                .antMatchers(PUBLIC_MATCHERS).permitAll()
                .anyRequest()
                .authenticated();
        http.addFilter(new JWTAuthenticationFilter(authenticationManager(), jwtUtil));
        http.addFilter(new JWTAuthorizationFilter(authenticationManager(), jwtUtil, userService));
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration =  new CorsConfiguration().applyPermitDefaultValues();
        configuration.setAllowedMethods(Arrays.asList("POST", "GET", "PUT", "DELETE"));
        configuration.setAllowedOrigins(List.of(ALLOWED_ORIGINS));
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
