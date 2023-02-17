package com.example.main.Manager.dto;

import io.jsonwebtoken.Claims;

public class Auth {
	private String email;
	private String location;
	private ROLE role;

	public Auth(String email, String location, ROLE role) {
		super();
		this.setEmail(email);
		this.location = location;
		this.role = role;
	}

	public Auth() {

	}

	public ROLE getRole() {
		return role;
	}
	
    public Auth(Claims claims) {
        this.setEmail(claims.get("email").toString());
		this.setLocation(claims.get("location").toString());
//		System.out.println("Auth called, claims.location : "+claims.get("location"));
        this.role = ROLE.valueOf(claims.get("role").toString());
    }

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "Auth{" +
				"email='" + email + '\'' +
				", location=" + location +
				", role=" + role +
				'}';
	}
}
