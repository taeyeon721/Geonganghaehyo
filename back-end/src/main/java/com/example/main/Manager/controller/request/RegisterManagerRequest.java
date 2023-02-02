package com.example.main.Manager.controller.request;

public class RegisterManagerRequest {
	private String email;
	private String password;
	private String name;
	private String userName;

	public RegisterManagerRequest() {
		super();
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public RegisterManagerRequest(String email, String password, String name) {
		super();
		this.email = email;
		this.password = password;
		this.name = name;
	}

}
