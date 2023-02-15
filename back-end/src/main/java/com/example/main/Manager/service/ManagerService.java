package com.example.main.Manager.service;


import com.example.main.Manager.controller.request.LoginManagerRequest;
import com.example.main.Manager.dao.ManagerMapper;
import com.example.main.Manager.dto.Manager;
import com.example.main.Manager.dto.TokenDto;
import com.example.main.Manager.dto.TokensDto;
import com.example.main.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Component
@Service
@RequiredArgsConstructor
@Transactional(readOnly=true)
public class ManagerService {

    private final ManagerMapper managerMapper;

    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider authTokenProvider = new JwtTokenProvider();
    final static Logger logger = LogManager.getLogger(ManagerService.class);

    @Transactional
    public int register(Manager manager){
//        System.out.println(manager.getPassword());
//        System.out.println(manager.toString());
//        System.out.println(passwordEncoder.encode(manager.getPassword()));
//        System.out.println(pw);
        String pw = passwordEncoder.encode(manager.getPassword());
        manager.setPassword(pw);
        return managerMapper.register(manager);
    }

    @Transactional
    public int delete(String email) {
        return managerMapper.delete(email);
    }

    @Transactional
    public TokensDto login(LoginManagerRequest loginManager){
        Manager manager = managerMapper.login(loginManager.getEmail());
        try{
            passwordEncoder.matches(loginManager.getPassword(), manager.getPassword());

            String accessToken = authTokenProvider.createAccessToken(manager.getEmail(), manager.getName(), "web", manager.getRole());
            String refreshToken = authTokenProvider.createRefreshToken(manager.getEmail(), manager.getName(), "web", manager.getRole());
            managerMapper.updateRefreshToken(new TokenDto(manager.getEmail(), false, refreshToken));

            return new TokensDto(accessToken, refreshToken);
        } catch(NullPointerException e){
            return null;
        }
    }

    public int emailCheck(String email){ return managerMapper.emailCheck(email);}

    public Manager get(String email){ return managerMapper.get(email);}

    @Transactional
    public int update(Manager manager){
        manager.setPassword(passwordEncoder.encode(manager.getPassword()));
        return managerMapper.update(manager);
    }

    public boolean checkPassword(String password, String email){
        return passwordEncoder.matches(password, managerMapper.getPassword(email));
    }

    @Transactional
    public TokensDto refresh(String refreshToken){
        String refreshEmail = authTokenProvider.getUserId(authTokenProvider.getClaimsFromToken(refreshToken));
        Manager manager = get(refreshEmail);
        String accessToken = authTokenProvider.createAccessToken(manager.getEmail(), manager.getName(), "setTop", manager.getRole());

        return new TokensDto(accessToken, refreshToken);
    }

    public int isValid(Manager manager) {
        return managerMapper.isValid(manager);
    }
    // emailcheck 부분 생각하기
}
