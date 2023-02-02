package com.example.main.GymRecord.dto;

import lombok.*;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GymRecordDto {
    private String email;
    private String gymName;
    private LocalDate date;
}
