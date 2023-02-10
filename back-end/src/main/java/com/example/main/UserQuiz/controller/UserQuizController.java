package com.example.main.UserQuiz.controller;

import com.example.main.Manager.dto.Auth;
import com.example.main.UserQuiz.controller.request.RegisterUserQuizRequest;
import com.example.main.UserQuiz.dto.UserQuiz;
import com.example.main.UserQuiz.service.UserQuizService;
import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("quiz")
public class UserQuizController {

    final static Logger logger = LogManager.getLogger(UserQuizController.class);

    private final UserQuizService userQuizService;

    @PostMapping("create")
    public int insertQuiz(@AuthenticationPrincipal Auth auth, @RequestBody RegisterUserQuizRequest userQuiz){
        UUID quizId = UUID.randomUUID();
        boolean isImage;


        if (userQuiz.getAnswer().contains("https")){
            isImage = true;
        } else {
            isImage = false;
        }

        UserQuiz rec = new UserQuiz(quizId.toString(), auth.getEmail(), userQuiz.getQuestion(), userQuiz.getAnswer(), userQuiz.getDecoy(), isImage);
        logger.info("create/rec\n" + rec.toString());
        int check = userQuizService.insertQuiz(rec);
        return check;
    }

    @PostMapping("list")
    public List<UserQuiz> quizList(@AuthenticationPrincipal Auth auth){
        logger.info("quiz list called");
        return userQuizService.quizList(auth.getEmail());
    }
}
