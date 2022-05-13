package com.myportfy;

import com.myportfy.domain.Category;
import com.myportfy.domain.User;
import com.myportfy.domain.enums.Role;
import com.myportfy.repositories.CategoryRepository;
import com.myportfy.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Collections;

import static com.myportfy.domain.enums.Gender.*;

@SpringBootApplication
public class MyportfyApplication implements CommandLineRunner {

	@Autowired
	private BCryptPasswordEncoder pe;
	@Autowired
	private CategoryRepository categoryRepository;
	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(MyportfyApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");

		User pedro = new User("pedro","Pedro Oliveira", sdf.parse("2000/02/14"), MALE, "Pedro@gmail.com", pe.encode("senha123"),false, Collections.singleton(Role.USER), null);
		User joao = new User("joao","João Silva", sdf.parse("2002/07/23"), OTHER, "Joao@gmail.com", pe.encode("senha123"), false, Collections.singleton(Role.USER), null);
		User maria = new User("maria","Maria Rodrigues", sdf.parse("2001/09/05"), FEMALE, "Maria@gmail.com", pe.encode("senha123"), true, Collections.singleton(Role.ADMIN), null);

		Category categoryTeste1 = new Category("Teste1");
		Category categoryTeste2 = new Category("Teste2");
		Category categoryTeste3 = new Category("Teste3");

		categoryRepository.saveAllAndFlush(Arrays.asList(categoryTeste1, categoryTeste2, categoryTeste3));
		userRepository.saveAllAndFlush(Arrays.asList(pedro, joao, maria));
	}
}
