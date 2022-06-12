package com.myportfy.config.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.myportfy.dto.CredentialsDto;
import com.myportfy.dto.UserPrincipal;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;

    public JWTAuthenticationFilter(AuthenticationManager authenticationManager, JwtUtil jwtUtil) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
    }
    @Override
    public Authentication attemptAuthentication(HttpServletRequest req, HttpServletResponse res)
            throws AuthenticationException {
        try {
            CredentialsDto cred = new ObjectMapper().readValue(req.getInputStream(), CredentialsDto.class);
            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(cred.getUsername(),
                    cred.getPassword(), new ArrayList<>());
            return authenticationManager.authenticate(authToken);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest req, HttpServletResponse res, FilterChain chain,
                                            Authentication auth) throws IOException, ServletException {
        String username = ((UserPrincipal) auth.getPrincipal()).getUsername();
        String token = jwtUtil.generateToken(username);
        Long id = ((UserPrincipal) auth.getPrincipal()).getId();

        res.addHeader("Authorization", "Bearer " + token);
        res.addHeader("user_id", id.toString());
        res.addHeader("access-control-expose-headers", "Authorization, user_id");
    }
}
