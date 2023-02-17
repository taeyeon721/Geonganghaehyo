package com.example.main.Manager.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ManagerDto {
    private String email;
    private String password;
    private String userName;
    private String name;
    private String telNo;
    private String gender;
    private Integer age;
    private ROLE role;
}
