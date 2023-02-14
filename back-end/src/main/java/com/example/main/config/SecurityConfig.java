package com.example.main.config;

import com.example.main.Manager.dto.ROLE;
import com.example.main.handler.CustomAccessDeniedHandler;
import com.example.main.handler.CustomAuthenticationEntryPoint;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.HttpStatusReturningLogoutSuccessHandler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.example.main.jwt.JwtAuthenticationFilter;
import com.example.main.jwt.JwtTokenProvider;


@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final JwtTokenProvider jwtTokenProvider = new JwtTokenProvider();
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Bean
    public WebSecurityCustomizer configure() {
        return (web) -> web.ignoring().mvcMatchers();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception  {

        CustomAuthenticationEntryPoint customAuthenticationEntryPoint = new CustomAuthenticationEntryPoint();
        CustomAccessDeniedHandler customAccessDeniedHandler = new CustomAccessDeniedHandler();

        return http
                .authorizeRequests()
                .antMatchers(HttpMethod.GET, "/manager/**").permitAll()
                .antMatchers(HttpMethod.POST, "/manager/**").permitAll()
				.antMatchers(HttpMethod.POST, "/set-top/update").hasAnyRole(ROLE.ADMIN.toString())
				.antMatchers(HttpMethod.POST, "/notice/modify").hasAnyRole(ROLE.ADMIN.toString())
				.antMatchers(HttpMethod.POST, "/notice/delete").hasAnyRole(ROLE.ADMIN.toString())
                .anyRequest().permitAll()
                .and()
                .formLogin().disable()
                .logout()
                .logoutUrl("/manager/logout")
                .logoutSuccessHandler(new HttpStatusReturningLogoutSuccessHandler(HttpStatus.OK))
                .invalidateHttpSession(true)
                .deleteCookies("refreshToken")
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(customAuthenticationEntryPoint)
                .accessDeniedHandler(customAccessDeniedHandler)
                .and()
                .headers()
                .frameOptions().disable()
                .and()
                .cors()
                .and()
                .csrf().disable()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider, objectMapper), UsernamePasswordAuthenticationFilter.class)
                .build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
