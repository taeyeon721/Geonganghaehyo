package com.example.main.Message.dao;

import com.example.main.Message.dto.MessageDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface MessageMapper {
    MessageDto getOneMsg(String email, String userId, boolean isSound);
    List<MessageDto> sendMsgList(String email, String userId);
    int sendMsg(MessageDto messageDto) throws Exception;
}
