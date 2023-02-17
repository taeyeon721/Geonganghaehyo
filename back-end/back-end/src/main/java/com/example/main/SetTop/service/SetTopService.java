package com.example.main.SetTop.service;

import com.example.main.Manager.dto.TokenDto;
import com.example.main.Manager.dto.TokensDto;
import com.example.main.SetTop.controller.request.LoginSetTopRequest;
import com.example.main.SetTop.dao.SetTopMapper;
import com.example.main.SetTop.dto.SetTop;
import com.example.main.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly=true)
@Component
@RequiredArgsConstructor
public class SetTopService {
    private final SetTopMapper setTopMapper;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider authTokenProvider = new JwtTokenProvider();
    final static Logger logger = LogManager.getLogger(SetTopService.class);

    public int register(SetTop setTop) { return setTopMapper.register(setTop); };

    public TokensDto setTopLogin(LoginSetTopRequest loginSetTop) {
        logger.info("SetTopService.setTopLogin() called, loginSetTop info : "+loginSetTop.getSetTopId());
        SetTop setTop = setTopMapper.setTopLogin(loginSetTop.getSetTopId());
        logger.info("setTop object : " + setTop.toString());
        try {
            logger.info("setTopLogin try-catch");
            String accessToken = authTokenProvider.createAccessToken(setTop.getEmail(), setTop.getName(), "setTop", setTop.getRole());
            String refreshToken = authTokenProvider.createRefreshToken(setTop.getEmail(), setTop.getName(), "setTop", setTop.getRole());
            logger.info("accessToken : " + accessToken.toString() + "\nrefreshToken : " + refreshToken.toString());
            setTopMapper.updateRefreshToken(new TokenDto(setTop.getEmail(), true, refreshToken));

            return new TokensDto(accessToken, refreshToken);

        } catch (NullPointerException e){
            return null;
        }
    }
}
