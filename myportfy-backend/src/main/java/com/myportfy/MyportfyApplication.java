package com.myportfy;

import com.myportfy.domain.User;
import com.myportfy.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.List;

import static com.myportfy.domain.enums.Gender.FEMALE;
import static com.myportfy.domain.enums.Gender.MALE;
import static com.myportfy.domain.enums.Role.ADMIN;
import static com.myportfy.domain.enums.Role.USER;

@SpringBootApplication
public class MyportfyApplication implements CommandLineRunner {

	@Autowired
	private BCryptPasswordEncoder pe;
	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(MyportfyApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");

		User pedro = new User("pedro","Pedro Oliveira", sdf.parse("2001/09/05"), MALE, "Pedro@gmail.com", pe.encode("senha123"), true, Collections.singleton(USER),null);
		User maria = new User("maria","Maria Rodrigues", sdf.parse("2001/09/05"), FEMALE, "Maria@gmail.com", pe.encode("senha123"), true, Collections.singleton(ADMIN),null);
		userRepository.saveAll(List.of(pedro, maria));
	}
}
