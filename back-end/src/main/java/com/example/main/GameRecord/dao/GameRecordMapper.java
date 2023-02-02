package com.example.main.GameRecord.dao;


import com.example.main.GameRecord.dto.GameRecordDto;
import org.mapstruct.Mapper;

@Mapper
public interface GameRecordMapper {

    int insertScore(GameRecordDto gameRecordDto);
}
