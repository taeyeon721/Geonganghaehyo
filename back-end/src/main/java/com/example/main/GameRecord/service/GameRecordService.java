package com.example.main.GameRecord.service;

import com.example.main.GameRecord.dao.GameRecordMapper;
import com.example.main.GameRecord.dto.GameRecord;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@RequiredArgsConstructor
@Service
@Component
@Transactional(readOnly=true)
public class GameRecordService {

    private final GameRecordMapper gameRecordMapper;

    @Transactional
    public int recordScore(GameRecord gameRecord){
        System.out.println("readScore called");
        return gameRecordMapper.recordScore(gameRecord);
    }

    public int lastScore(String gameName, String email){
        return gameRecordMapper.lastScore(gameName, email);
    }
}
