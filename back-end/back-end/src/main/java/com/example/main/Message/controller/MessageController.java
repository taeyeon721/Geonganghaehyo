package com.example.main.Message.controller;

import com.example.main.Manager.dto.Auth;
import com.example.main.Message.controller.request.RegisterMsg;
import com.example.main.Message.controller.response.MessageResponse;
import com.example.main.Message.dto.Message;
import com.example.main.Message.dto.MsgType;
import com.example.main.Message.service.MessageService;
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

    @PostMapping("count/{msgType}")
    public int msgCount(@AuthenticationPrincipal Auth auth, @PathVariable(value="msgType") MsgType msgType){
        logger.info("message/count called");
        logger.info("msgType : " + msgType);
        String location = msgType.name().equals("FROM_MANAGER") ? "setTop" : "web";
        return messageService.msgCount(auth.getEmail(), location);
    }

    @PostMapping("latestList/{msgType}/{num}")
    public ResponseEntity<?> latestList(@AuthenticationPrincipal Auth auth, @PathVariable(value="num") int num, @PathVariable(value="msgType") MsgType msgType){
        logger.info("message/latestList called");
        logger.info("num : " + num);
        logger.info("msgType : " + msgType);
        String location = msgType.name().equals("FROM_MANAGER") ? "setTop" : "web";
        logger.info("location : " + location);
        num = messageService.msgCount(auth.getEmail(), location) >= num ? num : messageService.msgCount(auth.getEmail(), location);
        if(num > messageService.msgCount(auth.getEmail(), location)){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MessageResponse(num, messageService.latestList(auth.getEmail(), num, location)) );
        } else {
            return ResponseEntity.ok( new MessageResponse(num, messageService.latestList(auth.getEmail(), num, location)));
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
        logger.info("auth : "+auth.toString());
        UUID msgId = UUID.randomUUID();
        Message message = new Message(msgId.toString(), auth.getEmail(), auth.getLocation(), content.getContent(), LocalDateTime.now());
        int res= messageService.insertMsg(message);
        return res;
    }
}
