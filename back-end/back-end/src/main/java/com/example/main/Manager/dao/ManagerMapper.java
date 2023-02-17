package com.example.main.Manager.dao;

import com.example.main.Manager.dto.Manager;
import com.example.main.Manager.dto.ManagerDto;
import com.example.main.Manager.dto.TokenDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ManagerMapper {
    int register(Manager manager);
    Manager login(String email);
    int idCheck(String email);
    Manager get(String email);
    int update(Manager manager);

    int delete(String email);
    String getPassword(String email);
    void updateRefreshToken(TokenDto token);
    int emailCheck(String email);

    int isValid(Manager manager);
}
