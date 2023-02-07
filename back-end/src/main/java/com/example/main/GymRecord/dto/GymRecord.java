package com.example.main.GymRecord.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GymRecord {
    private String email;
    private String gymName;
    private LocalDateTime time;
}
