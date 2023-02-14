package com.example.main.SetTop.service;

import com.example.main.Manager.dto.Manager;
import com.example.main.Manager.dto.TokensDto;
import com.example.main.SetTop.controller.request.RegisterSetTopRequest;
import com.example.main.SetTop.dao.SetTopMapper;
import com.example.main.SetTop.dto.SetTop;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly=true)
@Component
@RequiredArgsConstructor
public class SetTopService {
    private final SetTopMapper setTopMapper;

    public int register(SetTop setTop) { return setTopMapper.register(setTop); };

    public TokensDto setTopLogin(String setTopId) {

    }
}
