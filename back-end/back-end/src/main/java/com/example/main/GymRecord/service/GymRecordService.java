package com.example.main.GymRecord.service;

import com.example.main.GymRecord.dao.GymRecordMapper;
import com.example.main.GymRecord.dto.GymRecord;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDateTime;

@Service
@Component
@RequiredArgsConstructor
@Transactional(readOnly=true)
public class GymRecordService {

    private final GymRecordMapper gymRecordMapper;

    @Transactional
    public int insertWorkout(GymRecord gymRecord){
        return gymRecordMapper.insertWorkout(gymRecord);
    }

    public int dailyWorkout(String email, String gymName, LocalDateTime time){
        System.out.println("dailyWorkout result : " + gymRecordMapper.dailyWorkout(email, gymName, time));
        return gymRecordMapper.dailyWorkout(email, gymName, time);
    }
}
