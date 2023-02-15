package com.example.main.SetTop.dto;

import com.example.main.Manager.dto.ROLE;
import com.example.main.SetTop.dto.SETTOP_ROLE;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SetTop {
    private String setTopId;
    private String name;
    private String telNo;
    private String email;
    private ROLE role;

    public SetTop(String setTopId, String name, String telNo, String email) {
        this.setTopId = setTopId;
        this.name = name;
        this.telNo = telNo;
        this.email = email;
    }
}
