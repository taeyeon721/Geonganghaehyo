package com.example.main.Message.dao;

import com.example.main.Message.dto.MessageDto;
import org.mapstruct.Mapper;

import java.time.LocalDateTime;
import java.util.List;

@Mapper
public interface MessageMapper {
    MessageDto userLastMsg(int msgId, String email, String userId, LocalDateTime time); // 보호자가 최신 메시지 확인할 때
    MessageDto managerLastMsg(int msgId, String email, String userId, LocalDateTime time); // 유저가 최신 메세지 확인할 때
    List<MessageDto> msgList(String email, String userId); // 보호자와 유저가 메세지함 확인할 때
    int insertMsg(MessageDto messageDto) throws Exception; // 보낸 메세지를 DB에 저장
}
