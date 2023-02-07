package com.example.main.Message.dto;

import lombok.*;
import java.time.LocalDateTime;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Message {
    private String msgId;
    private String email;
    private boolean isSound;
    private String content;
    private LocalDateTime time;
}
