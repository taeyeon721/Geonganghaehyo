package com.example.main.Manager.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ManagerDto {
    private String email;

    private String name;

    private String password;

    private String gender;

    private Integer age;

    private String telNo;

    private String userName;

    private ROLE role;
}
