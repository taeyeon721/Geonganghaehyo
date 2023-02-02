package com.example.main.UserQuiz.dto;

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
