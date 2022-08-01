package com.myportfy;

import org.joda.time.DateTimeZone;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

import java.util.TimeZone;

@SpringBootApplication
@EnableAsync
public class MyportfyApplication {
	private static final String TIME_ZONE = "America/Sao_Paulo";
	public static void main(String[] args) {
		TimeZone.setDefault(TimeZone.getTimeZone(TIME_ZONE));
		DateTimeZone.setDefault(DateTimeZone.forID(TIME_ZONE));
		SpringApplication.run(MyportfyApplication.class, args);
	}

}
