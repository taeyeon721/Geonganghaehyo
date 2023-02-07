package com.example.main.Message.dao;

import com.example.main.Message.dto.Message;
import org.mapstruct.Mapper;
import java.util.List;

@Mapper
public interface MessageMapper {
    int userLastMsg(String email); // 보호자가 최신 메시지 확인할 때
    int managerLastMsg(String email); // 유저가 최신 메세지 확인할 때
    List<Message> msgList(String email); // 보호자와 유저가 메세지함 확인할 때
    int insertMsg(Message message); // 보낸 메세지를 DB에 저장
}
