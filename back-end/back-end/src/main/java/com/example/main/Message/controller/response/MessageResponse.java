package com.example.main.Message.controller.response;

import com.example.main.Message.dto.Message;

import java.util.List;

public class MessageResponse {
    private int resVal;
    private List<Message> msgList;

    public int getResVal() {
        return resVal;
    }

    public void setResVal(int resVal) {
        this.resVal = resVal;
    }

    public List<Message> getMsgList() {
        return msgList;
    }

    public void setMsgList(List<Message> msgList) {
        this.msgList = msgList;
    }

    public MessageResponse(int resVal, List<Message> msgList) {
        super();
        this.resVal = resVal;
        this.msgList = msgList;
    }

    @Override
    public String toString() {
        return "MessageResponse{" +
                "resVal=" + resVal +
                ", msgList=" + msgList +
                '}';
    }
}
