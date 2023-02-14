package com.example.main.Message.service;

import com.example.main.Message.dao.MessageMapper;
import com.example.main.Message.dto.Message;
import com.example.main.Message.dto.MsgType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly=true)
@Component
@RequiredArgsConstructor
public class MessageService {

    private final MessageMapper messageMapper;

    public Message userLastMsg(String email){
        return messageMapper.userLastMsg(email);
    }

    public Message managerLastMsg(String email){
        return messageMapper.managerLastMsg(email);
    }

    public int msgCount(String email, boolean isSound){ return messageMapper.msgCount(email, isSound); }

    public List<Message> latestList(String email, int num, boolean isSound){
        return messageMapper.latestList(email, num, isSound);
    }

    public List<Message> msgList(String email){
        return messageMapper.msgList(email);
    }

    @Transactional
    public int insertMsg(Message message){
        return messageMapper.insertMsg(message);
    }
}
