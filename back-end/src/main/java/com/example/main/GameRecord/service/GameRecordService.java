package com.example.main.GameRecord.service;

import com.example.main.GameRecord.dao.GameRecordMapper;
import com.example.main.GameRecord.dto.GameRecordDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class GameRecordService {

    private GameRecordMapper gameRecordMapper;

    @Transactional
    public int insertScore(GameRecordDto gameRecordDto){
        gameRecordMapper.insert(gameRecordDto);
        retrun gameRecordDto;
    }
}
