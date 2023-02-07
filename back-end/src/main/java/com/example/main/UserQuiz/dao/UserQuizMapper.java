package com.example.main.UserQuiz.dao;

import com.example.main.UserQuiz.dto.UserQuiz;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface UserQuizMapper {

    //유저 퀴즈 생성
    int insertQuiz(UserQuiz userQuiz);
    //유저 퀴즈 조회
    List<UserQuiz> quizList(String email);
}
