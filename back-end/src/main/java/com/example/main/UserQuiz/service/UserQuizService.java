package com.example.main.UserQuiz.service;

import com.example.main.UserQuiz.dao.UserQuizMapper;
import com.example.main.UserQuiz.dto.UserQuiz;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@RequiredArgsConstructor
@Component
@Transactional(readOnly = true)
public class UserQuizService {

    private final UserQuizMapper userQuizMapper;

    @Transactional
    public int insertQuiz(UserQuiz userQuiz){
        return userQuizMapper.insertQuiz(userQuiz);
    }

//    public int quizList(String email){
//        return userQuizMapper.quizList(email);
//    }

}
