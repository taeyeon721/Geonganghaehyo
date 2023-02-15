package com.example.main.Manager.dto;

import io.jsonwebtoken.Claims;

public class Auth {
	private String email;
	private ROLE role;

	public Auth(String email, ROLE role) {
		super();
		this.setEmail(email);
		this.role = role;
	}

	public Auth() {

	}

	public ROLE getRole() {
		return role;
	}
	
    public Auth(Claims claims) {
//		System.out.println("claims : " + claims);
        this.email = claims.get("email").toString();
        this.setEmail(claims.get("email").toString());
        this.role = ROLE.valueOf(claims.get("role").toString());
    }

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
