package com.example.main.SetTop.dao;

import com.example.main.Manager.dto.Manager;
import com.example.main.SetTop.controller.request.RegisterSetTopRequest;
import com.example.main.SetTop.dto.SetTop;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SetTopMapper {
    int isExist(Manager manager);
    int register(SetTop setTop);
}
