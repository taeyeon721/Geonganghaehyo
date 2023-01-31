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
}
