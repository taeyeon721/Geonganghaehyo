package com.example.main.Manager.dto;

import io.jsonwebtoken.Claims;

public class Auth {
	private String id;
	private String email;
	private ROLE role;

	public Auth(String id, String email, ROLE role) {
		super();
		this.id = id;
		this.setEmail(email);
		this.role = role;
	}

	public String getId() {
		return id;
	}

	public ROLE getRole() {
		return role;
	}
	
    public Auth(Claims claims) {
        this.id = claims.get("id").toString();
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
