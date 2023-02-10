package com.example.main.SetTop.controller.request;

public class RegisterSetTopRequest {
    private String setTopID;
    private String name;
    private String telNo;

    public String getSetTopID() {
        return setTopID;
    }

    public void setSetTopID(String setTopID) {
        this.setTopID = setTopID;
    }

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
        this.setTopID = setTopID;
        this.name = name;
        this.telNo = telNo;
    }
}
