package com.myportfy;

import com.myportfy.domain.Category;
import com.myportfy.domain.Post;
import com.myportfy.domain.User;
import com.myportfy.domain.enums.Role;
import com.myportfy.repositories.CategoryRepository;
import com.myportfy.repositories.PostRepository;
import com.myportfy.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.text.SimpleDateFormat;
import java.util.Arrays;

import static com.myportfy.domain.enums.Gender.*;

@SpringBootApplication
public class MyportfyApplication implements CommandLineRunner {

	@Autowired
	private BCryptPasswordEncoder pe;
	@Autowired
	private PostRepository postRepository;
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

		User pedro = new User("pedro","Pedro Oliveira", sdf.parse("2000/02/14"), MALE, "Pedro@gmail.com", pe.encode("senha123"));
		User joao = new User("joao","João Silva", sdf.parse("2002/07/23"), OTHER, "Joao@gmail.com", pe.encode("senha123"));
		User maria = new User("maria","Maria Rodrigues", sdf.parse("2001/09/05"), FEMALE, "Maria@gmail.com", pe.encode("senha123"));
		maria.setRoles(Role.ADMIN);

		Category categoryTeste1 = new Category("Teste1");
		Category categoryTeste2 = new Category("Teste2");
		Category categoryTeste3 = new Category("Teste3");

		Post postTeste1 = new Post("Post de teste1", null,"Estou testando este post","Estou testando este post");
		Post postTeste2 = new Post("Post de teste2", null,"Estou testando este post","Estou testando este post");
		Post postTeste3 = new Post("Post de teste3", null,"Estou testando este post","Estou testando este post");

		categoryTeste1.getPosts().addAll(Arrays.asList(postTeste1, postTeste3));
		categoryTeste2.getPosts().addAll(Arrays.asList(postTeste1, postTeste2));
		categoryTeste3.getPosts().addAll(Arrays.asList(postTeste1, postTeste3));

		postTeste1.getCategories().addAll(Arrays.asList(categoryTeste1, categoryTeste3));
		postTeste2.getCategories().addAll(Arrays.asList(categoryTeste1, categoryTeste2));
		postTeste3.getCategories().addAll(Arrays.asList(categoryTeste1, categoryTeste2, categoryTeste3));

		postTeste1.setAuthor(pedro);
		postTeste2.setAuthor(joao);
		postTeste3.setAuthor(maria);

		pedro.getPosts().add(postTeste1);
		joao.getPosts().add(postTeste2);
		maria.getPosts().add(postTeste3);

		categoryRepository.saveAllAndFlush(Arrays.asList(categoryTeste1, categoryTeste2, categoryTeste3));
		userRepository.saveAllAndFlush(Arrays.asList(pedro, joao, maria));
		postRepository.saveAllAndFlush(Arrays.asList(postTeste1, postTeste2, postTeste3));
	}
}
