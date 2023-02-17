package com.example.main.Manager.controller.response;

public class TokenResponse {
	private String message;
	private String accessToken;
	public TokenResponse() {
		super();
	}
	public TokenResponse(String message, String accessToken) {
		super();
		this.message = message;
		this.accessToken = accessToken;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getAccessToken() {
		return accessToken;
	}
	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}
}
