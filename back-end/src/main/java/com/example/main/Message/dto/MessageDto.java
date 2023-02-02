package com.example.main.Message.dto;

import lombok.*;
import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MessageDto {
    private int msgId;
    private String email;
    private String userId;
    private boolean isSound;
    private String content;
    private LocalDateTime time;
}
