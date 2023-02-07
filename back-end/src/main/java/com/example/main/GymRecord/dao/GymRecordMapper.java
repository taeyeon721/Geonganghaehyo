package com.example.main.GymRecord.dao;

import com.example.main.GymRecord.dto.GymRecord;
import org.apache.ibatis.annotations.Mapper;
import java.time.LocalDateTime;

@Mapper
public interface GymRecordMapper {

    int insertWorkout(GymRecord gymRecord); // 데일리 체조 횟수 저장
    int dailyWorkout(String email, String gymName, LocalDateTime time); // 데일리 체조 횟수 조회
}
