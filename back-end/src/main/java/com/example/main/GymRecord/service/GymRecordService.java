package com.example.main.GymRecord.service;

import com.example.main.GymRecord.dao.GymRecordMapper;
import com.example.main.GymRecord.dto.GymRecordDto;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Service
@Component
public class GymRecordService {

    private GymRecordMapper gymRecordMapper;

    @Transactional
    public int insertWorkout(GymRecordDto gymRecordDto){
        return gymRecordMapper.insertWorkout(gymRecordDto);
    }

    public int dailyWorkout(LocalDate date){
        return gymRecordMapper.dailyWorkout(date);
    }
}
