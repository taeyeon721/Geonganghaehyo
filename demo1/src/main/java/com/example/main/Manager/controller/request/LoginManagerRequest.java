package com.example.main.Manager.controller.request;

public class LoginManagerRequest {
	private String email;
	private String password;
	
	public LoginManagerRequest() {
		super();
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
