package com.example.main.GameRecord.controller.request;

import java.time.LocalDateTime;

public class RegisterGameRecordRequest {

    private int gameScore;
    private LocalDateTime time;

    public int getGameScore() {
        return gameScore;
    }

    public void setGameScore(int gameScore) {
        this.gameScore = gameScore;
    }

    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime time) {
        this.time = time;
    }

    public RegisterGameRecordRequest(int gameScore, LocalDateTime time) {
        this.gameScore = gameScore;
        this.time = time;
    }
}
