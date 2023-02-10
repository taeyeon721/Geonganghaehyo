package com.example.main.UserQuiz.service;

import com.example.main.Manager.dto.Auth;
import com.example.main.UserQuiz.dao.UserQuizMapper;
import com.example.main.UserQuiz.dto.UserQuiz;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional(readOnly=true)
@Component
@RequiredArgsConstructor
public class UserQuizService {

    private final UserQuizMapper userQuizMapper;

    @Transactional
    public int insertQuiz(UserQuiz userQuiz){
        return userQuizMapper.insertQuiz(userQuiz);
    }

    public int quizCount(String email) { return userQuizMapper.quizCount(email); }

    public List<UserQuiz> randExt(int num){ return userQuizMapper.randExt(num); }

    public List<UserQuiz> quizList(String email){ return userQuizMapper.quizList(email); }

    public int deleteQuiz(String quizId) { return userQuizMapper.deleteQuiz(quizId); }
}
