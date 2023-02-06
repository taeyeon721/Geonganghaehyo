package com.example.main.UserQuiz.dao;

import com.example.main.UserQuiz.dto.UserQuiz;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface UserQuizMapper {

    //유저 퀴즈 생성
    int insertQuiz(UserQuiz userQuiz);

    //유저 퀴즈 조회
//    int quizList(String email);
}
