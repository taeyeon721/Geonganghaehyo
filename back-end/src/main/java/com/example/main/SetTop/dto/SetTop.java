package com.example.main.SetTop.dto;

public class SetTop {
    private String setTopID;
    private String name;
    private String tel_no;

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
        return tel_no;
    }

    public void setTel_no(String tel_no) {
        this.tel_no = tel_no;
    }

    public SetTop(String setTopID, String name, String tel_no) {
        this.setTopID = setTopID;
        this.name = name;
        this.tel_no = tel_no;
    }
}
