package com.example.main.GameRecord.dao;


import com.example.main.GameRecord.dto.GameRecord;
import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface GameRecordMapper {

    int recordScore(GameRecord gameRecord); // 점수 기록 저장
    int lastScore(String gameName, String email); // 최근 점수 기록 조회
}
