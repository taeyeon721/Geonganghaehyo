package com.example.main.SetTop.dao;

import com.example.main.Manager.dto.Manager;
import com.example.main.Manager.dto.TokenDto;
import com.example.main.Manager.dto.TokensDto;
import com.example.main.SetTop.controller.request.RegisterSetTopRequest;
import com.example.main.SetTop.dto.SetTop;
import com.example.main.SetTop.dto.SetTopTokenDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SetTopMapper {
    int register(SetTop setTop);

    SetTop setTopLogin(String setTopId);

    void updateRefreshToken(TokenDto token);
}
