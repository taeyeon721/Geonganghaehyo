package com.example.main.UserQuiz.controller.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegisterUserQuizRequest {
    private String question;
    private String answer;
    private String decoy;
}
