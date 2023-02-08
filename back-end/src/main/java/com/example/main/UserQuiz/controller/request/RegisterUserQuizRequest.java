package com.example.main.UserQuiz.controller.request;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RegisterUserQuizRequest {
    private String question;
    private String answer;
    private String decoy;
}
