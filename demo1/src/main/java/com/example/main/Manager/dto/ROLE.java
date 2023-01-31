package com.example.main.Manager.dto;

public enum ROLE {
	ADMIN("ADMIN"), MANAGER("MANAGER");

	private final String label;
	
	ROLE(String label) {
		this.label = label;
	}
	
	public String label() {
		return label;
	}
}
