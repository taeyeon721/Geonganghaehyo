package com.example.main.jwt;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import com.example.main.error.TokenValidFailedException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

import com.fasterxml.jackson.databind.ObjectMapper;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.io.DecodingException;
import io.jsonwebtoken.security.SignatureException;

/**
 * JWT 인증 필터
 */
public class JwtAuthenticationFilter extends GenericFilterBean {

    private JwtTokenProvider jwtTokenProvider;
    private ObjectMapper objectMapper;
    
    public JwtAuthenticationFilter(JwtTokenProvider jwtTokenProvider, ObjectMapper objectMapper) {
    	this.jwtTokenProvider = jwtTokenProvider;
    	this.objectMapper = objectMapper;
	}

	/**
     * JWT 토큰 검증
     * 만료된 토큰이 발견되었을 때, 만료된 토큰 응답 발생
     *
     * @param request     SubletRequest
     * @param response    SubletResponse
     * @param filterChain FilterChain
     */
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException, ServletException {
        try {
            Claims claims = jwtTokenProvider.resolveToken((HttpServletRequest) request);
            if (claims != null)
                SecurityContextHolder.getContext().setAuthentication(jwtTokenProvider.getAuthentication(claims));
            filterChain.doFilter(request, response);
        } catch (SignatureException e) {
            throw new TokenValidFailedException("유효하지 않은 토큰입니다.");
        } catch (MalformedJwtException e) {
            throw new TokenValidFailedException("손상된 토큰입니다.");
        } catch (DecodingException e) {
            throw new TokenValidFailedException("잘못된 인증입니다.");
        } catch (ExpiredJwtException e) {
            throw new TokenValidFailedException("만료된 토큰입니다.");
        }
    }
}