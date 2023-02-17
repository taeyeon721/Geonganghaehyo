package com.example.main.Manager.dto;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Manager {
    private String email;

    private String password;

    private String name;

    private String gender;

    private Integer age;

    private String telNo;

    private String userName;

    private ROLE role;

    public Manager(String email, String password, String name, String gender, Integer age, String telNo, String userName) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.telNo = telNo;
        this.userName = userName;
    }

    @Override
    public String toString() {
        return "Manager{" +
                "email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                ", gender='" + gender + '\'' +
                ", age=" + age +
                ", telNo='" + telNo + '\'' +
                ", userName='" + userName + '\'' +
                ", role=" + role +
                '}';
    }
}
