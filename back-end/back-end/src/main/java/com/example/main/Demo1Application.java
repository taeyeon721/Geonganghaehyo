package com.example.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Demo1Application {

    // @EnableAutoConfiguration
    public static void main(String[] args) {
        SpringApplication.run(Demo1Application.class, args);
    }

}