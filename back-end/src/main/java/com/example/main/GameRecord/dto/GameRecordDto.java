package com.example.main.GameRecord.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GameRecordDto {
    private String email;
    private String gameName;
    private int gameScore;
    private LocalDateTime time;
}
