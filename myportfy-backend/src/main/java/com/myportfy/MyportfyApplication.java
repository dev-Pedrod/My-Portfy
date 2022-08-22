package com.myportfy;

import com.myportfy.domain.Category;
import com.myportfy.repositories.CategoryRepository;
import org.joda.time.DateTimeZone;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

import java.time.LocalDateTime;
import java.util.TimeZone;

@SpringBootApplication
@EnableAsync
public class MyportfyApplication implements CommandLineRunner {

	@Autowired
	private CategoryRepository categoryRepository;

	private static final String TIME_ZONE = "America/Sao_Paulo";
	public static void main(String[] args) {
		TimeZone.setDefault(TimeZone.getTimeZone(TIME_ZONE));
		DateTimeZone.setDefault(DateTimeZone.forID(TIME_ZONE));
		SpringApplication.run(MyportfyApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Category support = new Category("Base");
		support.setCreatedAt(LocalDateTime.now());
		categoryRepository.save(support);
	}
}
