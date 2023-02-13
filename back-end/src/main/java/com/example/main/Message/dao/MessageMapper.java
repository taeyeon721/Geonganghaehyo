package com.example.main.Message.dao;

import com.example.main.Message.dto.Message;
import com.example.main.Message.dto.MsgType;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MessageMapper {
    Message userLastMsg(String email); // 보호자가 최신 메시지 확인할 때
    Message managerLastMsg(String email); // 유저가 최신 메세지 확인할 때
    int msgCount(String email, MsgType msgType);    // 자기 계정의 메세지 개수를 샘
    List<Message> msgList(String email); // 보호자와 유저가 메세지함 확인할 때
    int insertMsg(Message message); // 보낸 메세지를 DB에 저장

    List<Message> latestList(int num, MsgType msgType); // 유형 따라서 최근 메세지를 num개만큼 돌려줌
}
