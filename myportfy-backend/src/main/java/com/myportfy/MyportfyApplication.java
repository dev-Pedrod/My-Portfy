package com.myportfy;

import com.myportfy.domain.Category;
import com.myportfy.domain.Post;
import com.myportfy.repositories.CategoryRepository;
import com.myportfy.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;

@SpringBootApplication
public class MyportfyApplication implements CommandLineRunner {

	@Autowired
	private PostRepository postRepository;
	@Autowired
	private CategoryRepository categoryRepository;

	public static void main(String[] args) {
		SpringApplication.run(MyportfyApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		Category categoryTeste1 = new Category("Teste1");
		Category categoryTeste2 = new Category("Teste2");
		Category categoryTeste3 = new Category("Teste3");

		Post postTeste1 = new Post("Post de teste1", "Pedro","Estou testando este post","Estou testando este post");
		Post postTeste2 = new Post("Post de teste2", "João","Estou testando este post","Estou testando este post");
		Post postTeste3 = new Post("Post de teste3", "Maria","Estou testando este post","Estou testando este post");

		categoryTeste1.getPosts().addAll(Arrays.asList(postTeste1, postTeste3));
		categoryTeste2.getPosts().addAll(Arrays.asList(postTeste1, postTeste2));
		categoryTeste3.getPosts().addAll(Arrays.asList(postTeste1, postTeste3));

		postTeste1.getCategories().addAll(Arrays.asList(categoryTeste1, categoryTeste3));
		postTeste2.getCategories().addAll(Arrays.asList(categoryTeste1, categoryTeste2));
		postTeste3.getCategories().addAll(Arrays.asList(categoryTeste1, categoryTeste2, categoryTeste3));

		

		categoryRepository.saveAll(Arrays.asList(categoryTeste1, categoryTeste2, categoryTeste3));
		postRepository.saveAll(Arrays.asList(postTeste1, postTeste2, postTeste3));

	}
}
