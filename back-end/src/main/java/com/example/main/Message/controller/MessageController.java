package com.example.main.Message.controller;

import com.example.main.Manager.dto.Auth;
import com.example.main.Message.controller.request.RegisterMsg;
import com.example.main.Message.dto.Message;
import com.example.main.Message.dto.MsgType;
import com.example.main.Message.service.MessageService;
import com.example.main.UserQuiz.controller.UserQuizController;
import com.example.main.UserQuiz.controller.response.UserQuizResponse;
import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("message")
@RequiredArgsConstructor
public class MessageController {

    final static Logger logger = LogManager.getLogger(MessageController.class);

    private final MessageService messageService;

    @PostMapping("manager") // 보호자가 최신 메시지 확인할 때
    public Message userLastMsg(@AuthenticationPrincipal Auth auth){
        Message message = messageService.userLastMsg(auth.getEmail());
        return message;
    }

    @PostMapping("user") // 유저가 최신 메세지 확인할 때
    public Message managerLastMsg(@AuthenticationPrincipal Auth auth){
        Message message =  messageService.managerLastMsg(auth.getEmail());
        return message;
    }

    @PostMapping("count")
    public int msgCount(@AuthenticationPrincipal Auth auth, MsgType msgType){
        logger.info("message/count called");
        logger.info("msgType : " + msgType);
        return messageService.msgCount(auth.getEmail(), msgType);
    }

    @PostMapping("latestList/{num}")
    public ResponseEntity<?> latestList(@PathVariable(value="num") int num){
        logger.info("userQuiz/randExt called");

        logger.info("num : " + num);
        if(num > userQuizService.quizCount(auth.getEmail())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new UserQuizResponse(num, userQuizService.randExt(num)) );
        } else {
            return ResponseEntity.ok( new UserQuizResponse(num, userQuizService.randExt( num )) );
        }
    }

    // 보호자와 유저가 메세지함 확인할 때
    @PostMapping("list")
    public List<Message> msgList(@AuthenticationPrincipal Auth auth){
        return messageService.msgList(auth.getEmail());
    }

    // 보낸 메세지를 DB에 저장, uuid
    @PostMapping("save")
    public int insertMsg(@AuthenticationPrincipal Auth auth, @RequestBody RegisterMsg content){
        UUID msgId = UUID.randomUUID();

        boolean isSound;

        if(content.getContent().contains("https")){
            isSound = true;
        }else {
            isSound = false;
        }
        Message message = new Message(msgId.toString(), auth.getEmail(), isSound, content.getContent(), LocalDateTime.now());
        System.out.println(message.toString());
        int res= messageService.insertMsg(message);
        return res;
    }
}
