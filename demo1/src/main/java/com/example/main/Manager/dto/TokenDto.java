package com.example.main.Manager.dto;

public class TokenDto {
	private String email;
	private String refreshToken;
	public TokenDto(String email, String refreshToken) {
		super();
		this.email = email;
		this.refreshToken = refreshToken;
	}

	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRefreshToken() {
		return refreshToken;
	}
	public void setRefreshToken(String refreshToken) {
		this.refreshToken = refreshToken;
	}
	
}
