package com.example.main.UserQuiz.controller;

import com.example.main.Manager.dto.Auth;
import com.example.main.UserQuiz.controller.request.RegisterUserQuizRequest;
import com.example.main.UserQuiz.controller.response.UserQuizResponse;
import com.example.main.UserQuiz.dto.UserQuiz;
import com.example.main.UserQuiz.service.UserQuizService;
import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("userQuiz")
public class UserQuizController {

    final static Logger logger = LogManager.getLogger(UserQuizController.class);

    private final UserQuizService userQuizService;

    @PostMapping("create")
    public int insertQuiz(@AuthenticationPrincipal Auth auth, @RequestBody RegisterUserQuizRequest userQuiz){
        logger.info("userQuiz/insertQuiz called");
        UUID quizId = UUID.randomUUID();
        boolean isImage;


        if (userQuiz.getAnswer().contains("https")){
            isImage = true;
        } else {
            isImage = false;
        }

        UserQuiz rec = new UserQuiz(quizId.toString(), auth.getEmail(), userQuiz.getQuestion(), userQuiz.getAnswer(), userQuiz.getDecoy(), isImage);
//        logger.info("create/rec\n" + rec.toString());
        int check = userQuizService.insertQuiz(rec);
        return check;
    }

    // 전채 quiz 갯수 새기
    @PostMapping("count")
    public int quizCount(@AuthenticationPrincipal Auth auth){
        logger.info("userQuiz/quizCount called");
        int res = userQuizService.quizCount(auth.getEmail());
        return res;
    }

    //num 개수만큼 무작위 추출하기
    @PostMapping("randExt/{num}")
    public ResponseEntity<?> randExt(@AuthenticationPrincipal Auth auth, @PathVariable(value="num") int num){
        logger.info("userQuiz/randExt called");
        num = userQuizService.quizCount(auth.getEmail()) >= num ? num : userQuizService.quizCount(auth.getEmail());
        logger.info("num : " + num);
        if(num > userQuizService.quizCount(auth.getEmail())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new UserQuizResponse(num, userQuizService.randExt(num)) );
        } else {
            return ResponseEntity.ok( new UserQuizResponse(num, userQuizService.randExt( num )) );
        }
    }

    @PostMapping("delete")
    public int deleteQuiz(@AuthenticationPrincipal Auth auth,  @RequestBody UserQuiz userQuiz){
        logger.info("userQuiz/delete called");
        userQuiz.setEmail(auth.getEmail());
        logger.info("userQuiz/delete quizId : " + userQuiz.getQuizId());
        return userQuizService.deleteQuiz(userQuiz.getQuizId());

    }

    @PostMapping("list")
    public List<UserQuiz> quizList(@AuthenticationPrincipal Auth auth){
        logger.info("quiz list called");
        return userQuizService.quizList(auth.getEmail());
    }
}
