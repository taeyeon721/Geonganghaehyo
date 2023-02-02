package com.example.main.GymRecord.dao;

import com.example.main.GymRecord.dto.GymRecordDto;
import org.apache.ibatis.annotations.Mapper;

import java.time.LocalDate;

@Mapper
public interface GymRecordMapper {

    int insertWorkout(GymRecordDto gymRecordDto); // 데일리 체조 횟수 저장
    int dailyWorkout(LocalDate date); // 데일리 체조 횟수 조회
}
