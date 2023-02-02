package com.example.main.User.service;

import com.example.main.User.dao.UserMapper;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private UserMapper userMapper;
    final static Logger logger = LogManager.getLogger(UserService.class);



}
