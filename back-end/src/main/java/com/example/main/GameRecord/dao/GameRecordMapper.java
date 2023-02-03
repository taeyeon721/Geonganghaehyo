package com.example.main.GameRecord.dao;


import com.example.main.GameRecord.dto.GameRecordDto;
import org.mapstruct.Mapper;

@Mapper
public interface GameRecordMapper {

    int insertScore(GameRecordDto gameRecordDto); // 점수 기록 저장
    int lastScore(String email, String userName); // 최근 점수 기록 조회
}
