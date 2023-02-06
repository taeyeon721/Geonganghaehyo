package com.example.main.UserQuiz.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserQuiz {

    private UUID quizId;
    private String email;
    private String question;
    private String answer;
    private String decoy;
    private boolean isImage;

}
