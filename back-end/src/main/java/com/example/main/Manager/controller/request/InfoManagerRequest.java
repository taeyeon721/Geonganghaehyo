package com.example.main.Manager.controller.request;

public class InfoManagerRequest {
	private String email;

	private String password;

	private String name;

	public InfoManagerRequest() {
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public InfoManagerRequest(String email, String password, String name) {
		super();
		this.email = email;
		this.password = password;
		this.name = name;
	}
}
