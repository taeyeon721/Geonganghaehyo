package com.example.main.GymRecord.dao;

<<<<<<< HEAD
import com.example.main.GymRecord.dto.GymRecordDto;
import org.apache.ibatis.annotations.Mapper;

import java.time.LocalDate;
=======
import com.example.main.GymRecord.dto.GymRecord;
import org.apache.ibatis.annotations.Mapper;
import java.time.LocalDateTime;
>>>>>>> feature/back-end/user_quiz

@Mapper
public interface GymRecordMapper {

<<<<<<< HEAD
    int insertWorkout(GymRecordDto gymRecordDto); // 데일리 체조 횟수 저장
    int dailyWorkout(LocalDate date); // 데일리 체조 횟수 조회
=======
    int insertWorkout(GymRecord gymRecord); // 데일리 체조 횟수 저장
    int dailyWorkout(String email, String gymName, LocalDateTime time); // 데일리 체조 횟수 조회
>>>>>>> feature/back-end/user_quiz
}
