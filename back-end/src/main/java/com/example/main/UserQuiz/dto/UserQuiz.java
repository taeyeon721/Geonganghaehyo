package com.example.main.UserQuiz.dto;

import lombok.*;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserQuiz {

    private String quizid;
    private String email;
    private String question;
    private String answer;
    private String decoy;
    private boolean isImage;

    @Override
    public String toString() {
        return "UserQuiz{" +
                "quizid='" + quizid + '\'' +
                ", email='" + email + '\'' +
                ", question='" + question + '\'' +
                ", answer='" + answer + '\'' +
                ", decoy='" + decoy + '\'' +
                ", isImage=" + isImage +
                '}';
    }
}
