package com.example.main.UserQuiz.dao;

import com.example.main.Manager.dto.Auth;
import com.example.main.UserQuiz.dto.UserQuiz;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface UserQuizMapper {

    //유저 퀴즈 생성
    int insertQuiz(UserQuiz userQuiz);

    // 유저 퀴즈 개수 세기
    int quizCount(String email);

    // 지정받은 개수만큼 랜덤 추출하기
    List<UserQuiz> randExt(int num);

    //유저 퀴즈 조회
    List<UserQuiz> quizList(String email);

    int deleteQuiz(String quizId);
}
