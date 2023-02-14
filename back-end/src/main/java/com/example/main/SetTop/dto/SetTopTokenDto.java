package com.example.main.SetTop.dto;

public class SetTopTokenDto {
    private String email;
    private String setTopId;
    private String refreshToken;

    public SetTopTokenDto(String email, String setTopId, String refreshToken) {
        super();
        this.email = email;
        this.setTopId = setTopId;
        this.refreshToken = refreshToken;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSetTopId() {
        return setTopId;
    }

    public void setSetTopId(String setTopId) {
        this.setTopId = setTopId;
    }

    public String getRefreshToken() {
        return refreshToken;
    }
    public void setRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }
}
