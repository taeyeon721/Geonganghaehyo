package com.example.main.User.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserDto {

    private String managerEmail;
    private String userName;
    private int userAge;
//    private List<Game> gameList;
}
