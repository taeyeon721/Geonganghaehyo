package com.example.main.SetTop.controller.request;

public class LoginSetTopRequest {
    public String setTopId;

    public String getSetTopId() {
        return setTopId;
    }

    public void setSetTopId(String setTopId) {
        this.setTopId = setTopId;
    }

    public LoginSetTopRequest() {
    }

    public LoginSetTopRequest(String setTopId) {
        super();
        this.setTopId = setTopId;
    }

}
