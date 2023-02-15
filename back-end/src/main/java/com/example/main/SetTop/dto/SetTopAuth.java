package com.example.main.SetTop.dto;

import com.example.main.Manager.dto.Auth;
import io.jsonwebtoken.Claims;

public class SetTopAuth {
    private String setTopId;
    private SETTOP_ROLE role;

    public SetTopAuth(String setTopId, SETTOP_ROLE role) {
        super();
        this.setSetTopId(setTopId);
        this.role = role;
    }

    public SetTopAuth(Claims claims) {
//		System.out.println("claims : " + claims);
        this.setTopId = claims.get("setTopId").toString();
        this.setSetTopId(claims.get("setTopId").toString());
        this.role = SETTOP_ROLE.valueOf(claims.get("role").toString());
    }



    public String getSetTopId() {
        return setTopId;
    }

    public void setSetTopId(String setTopId) {
        this.setTopId = setTopId;
    }
}
