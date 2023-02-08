package com.example.main.GymRecord.service;

import com.example.main.GymRecord.dao.GymRecordMapper;
<<<<<<< HEAD
import com.example.main.GymRecord.dto.GymRecordDto;
=======
import com.example.main.GymRecord.dto.GymRecord;
import lombok.RequiredArgsConstructor;
>>>>>>> feature/back-end/user_quiz
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

<<<<<<< HEAD
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
=======
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
>>>>>>> feature/back-end/user_quiz
    }
}
