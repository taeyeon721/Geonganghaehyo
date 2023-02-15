package com.example.main.SetTop.controller.request;

public class RegisterSetTopRequest {
    private String name;
    private String telNo;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTelNo() {
        return telNo;
    }

    public void setTelNo(String telNo) {
        this.telNo = telNo;
    }

    public RegisterSetTopRequest(String setTopID, String name, String telNo) {
        this.name = name;
        this.telNo = telNo;
    }
}
