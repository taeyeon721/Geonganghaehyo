package com.example.main.GameRecord.dto;


import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GameRecord {
    private String email;
    private String gameName;
    private int gameScore;
    private LocalDateTime gameTime;
}
