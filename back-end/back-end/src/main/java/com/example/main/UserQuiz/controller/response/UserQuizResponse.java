package com.example.main.UserQuiz.controller.response;

import com.example.main.UserQuiz.dto.UserQuiz;

import java.util.List;

public class UserQuizResponse {
    private int message;
    private List<UserQuiz> quizList;

    public int getMessage() {
        return message;
    }

    public void setMessage(int message) {
        this.message = message;
    }

    public List<UserQuiz> getQuizList() {
        return quizList;
    }

    public void setQuizList(List<UserQuiz> quizList) {
        this.quizList = quizList;
    }

    public UserQuizResponse(int message, List<UserQuiz> quizList) {
        super();
        this.message = message;
        this.quizList = quizList;
    }
}
