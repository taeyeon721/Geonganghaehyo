package com.example.main.SetTop.dto;

public class SetTop {
    private String setTopID;
    private String name;
    private String telNo;
    private String email;

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

    public String getTel_no() {
        return telNo;
    }

    public void setTel_no(String tel_no) {
        this.telNo = telNo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public SetTop(String setTopID, String name, String telNo, String email) {
        this.setTopID = setTopID;
        this.name = name;
        this.telNo = telNo;
        this.email = email;
    }
}
