package com.example.main.UserQuiz.controller;

import com.example.main.Manager.dto.Auth;
import com.example.main.UserQuiz.controller.request.RegisterUserQuizRequest;
import com.example.main.UserQuiz.dto.UserQuiz;
import com.example.main.UserQuiz.service.UserQuizService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("quiz")
@RequiredArgsConstructor
public class UserQuizController {

    private final UserQuizService userQuizService;

    @PostMapping("create")
    public int insertQuiz(@AuthenticationPrincipal Auth auth, @RequestBody RegisterUserQuizRequest userQuiz){
        UUID quizId = UUID.randomUUID();
        boolean isImage;
//        String quizId = uuid.toString();
//        System.out.println(quizId);


        if(userQuiz.getAnswer().contains("https")){
            isImage = true;
        }else {
            isImage = false;
        }

        UserQuiz rec = new UserQuiz(quizId, auth.getEmail(), userQuiz.getQuestion(), userQuiz.getAnswer(), userQuiz.getDecoy(), isImage);
        int check = userQuizService.insertQuiz(rec);
        return check;
    }

//    @PostMapping("list")
//    public int quizList(@AuthenticationPrincipal Auth auth){
//        int res = userQuizService.quizList(auth.getEmail());
//        return res;
//    }
}
