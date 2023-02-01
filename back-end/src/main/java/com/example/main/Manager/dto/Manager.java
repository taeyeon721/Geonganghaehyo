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

    private ROLE role;

    public Manager(String email, String password, String name) {
        super();
        this.email = email;
        this.password = password;
        this.name = name;
    }
    public Manager(String email, String password, String name, ROLE role) {
        super();
        this.email = email;
        this.password = password;
        this.name = name;
        this.role = role;
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
                ", role=" + role +
                '}';
    }
}
