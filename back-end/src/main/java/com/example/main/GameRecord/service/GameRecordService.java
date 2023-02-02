package com.example.main.GameRecord.service;

import com.example.main.GameRecord.dao.GameRecordMapper;
import com.example.main.GameRecord.dto.GameRecordDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Component
public class GameRecordService {

    private GameRecordMapper gameRecordMapper;

    @Transactional
    public int insertScore(GameRecordDto gameRecordDto){
        return gameRecordMapper.insertScore(gameRecordDto);
    }

    public GameRecordDto lastScore(String email, String userName){
        return gameRecordMapper.lastScore(email, userName);
    }
}
