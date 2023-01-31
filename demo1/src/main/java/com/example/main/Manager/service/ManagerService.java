package com.example.main.Manager.service;


import com.example.main.Manager.controller.request.LoginManagerRequest;
import com.example.main.Manager.dao.ManagerMapper;
import com.example.main.Manager.dto.Manager;
import com.example.main.Manager.dto.ManagerDto;
import com.example.main.Manager.dto.TokenDto;
import com.example.main.Manager.dto.TokensDto;
import com.example.main.jwt.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Component
@Service
@Transactional(readOnly=true)
public class ManagerService {

    private ManagerMapper managerMapper;

    private PasswordEncoder passwordEncoder;
    private JwtTokenProvider authTokenProvider = new JwtTokenProvider();

    @Transactional
    public int register(Manager manager){
        manager.setPassword(passwordEncoder.encode(manager.getPassword()));
        return managerMapper.register(manager);
    }

    @Transactional
    public TokensDto login(LoginManagerRequest loginManager){
        ManagerDto manager = managerMapper.login(loginManager.getEmail());
        try{
            passwordEncoder.matches(loginManager.getPassword(), manager.getPassword());

            String accessToken = authTokenProvider.createAccessToken(manager.getEmail(), manager.getName(), manager.getRole());
            String refreshToken = authTokenProvider.createRefreshToken(manager.getEmail(), manager.getName(), manager.getRole());
            managerMapper.updateRefreshToken(new TokenDto(manager.getEmail(), refreshToken));

            return new TokensDto(accessToken, refreshToken);
        } catch(NullPointerException e){
            return null;
        }
    }

    public int idCheck(String email){ return managerMapper.idCheck(email);}

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
        String accessToken = authTokenProvider.createAccessToken(manager.getEmail(), manager.getName(), manager.getRole());

        return new TokensDto(accessToken, refreshToken);
    }
    // emailcheck 부분 생각하기
}
