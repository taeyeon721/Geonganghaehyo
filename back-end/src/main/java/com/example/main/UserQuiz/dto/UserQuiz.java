package com.example.main.UserQuiz.dto;

import lombok.*;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserQuiz {

    private String quizId;
    private String email;
    private String question;
    private String answer;
    private String decoy;
    private boolean isImage;

}
