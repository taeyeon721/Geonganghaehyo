package com.example.main.Manager.dto;

public class TokenDto {
	private String email;
	private boolean isSetTop;
	private String refreshToken;
	public TokenDto(String email, boolean isSetTop, String refreshToken) {
		super();
		this.email = email;
		this.isSetTop = isSetTop;
		this.refreshToken = refreshToken;
	}

	public boolean isSetTop() {
		return isSetTop;
	}

	public void setSetTop(boolean setTop) {
		isSetTop = setTop;
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
