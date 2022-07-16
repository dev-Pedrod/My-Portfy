package com.myportfy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class MyportfyApplication {
	public static void main(String[] args) {
		SpringApplication.run(MyportfyApplication.class, args);
	}

}
