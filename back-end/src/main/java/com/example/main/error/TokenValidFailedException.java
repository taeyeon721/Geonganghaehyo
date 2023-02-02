package com.example.main.error;

public class TokenValidFailedException extends RuntimeException {
	public TokenValidFailedException(String message) {
		super(message);
	}
}
