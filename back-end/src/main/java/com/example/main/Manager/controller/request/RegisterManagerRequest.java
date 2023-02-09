package com.example.main.Manager.controller.request;

public class RegisterManagerRequest {
	private String email;
	private String password;
	private String userName;
	private String name;
	private String telNo;
	private String gender;
	private Integer age;
	public RegisterManagerRequest() {
		super();
	}

	// getter and setter
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

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTelNo() {
		return telNo;
	}

	public void setTelNo(String telNo) {
		this.telNo = telNo;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public RegisterManagerRequest(String email, String password, String name, String userName) {
		super();
		this.email = email;
		this.password = password;
		this.name = name;
		this.userName = userName;
	}

	public RegisterManagerRequest(String email, String password, String userName, String name, String telNo, String gender, Integer age) {
		this.email = email;
		this.password = password;
		this.userName = userName;
		this.name = name;
		this.telNo = telNo;
		this.gender = gender;
		this.age = age;
	}
}
