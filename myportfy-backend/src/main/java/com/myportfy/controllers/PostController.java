package com.myportfy.controllers;

import com.myportfy.controllers.exceptions.Response;
import com.myportfy.domain.Category;
import com.myportfy.domain.Post;
import com.myportfy.dto.post.PostCreateDto;
import com.myportfy.dto.post.PostDto;
import com.myportfy.services.ICategoryService;
import com.myportfy.services.IPostService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private IPostService postService;
    @Autowired
    private ICategoryService categoryService;

    @GetMapping("")
    public ResponseEntity<Page<Post>> getAll(Pageable pageable){
       return ResponseEntity.ok(postService.findAll(pageable));
    }
    @GetMapping("/{id}")
    public ResponseEntity<Post> getById(@PathVariable Long id){
        return ResponseEntity.ok(postService.findById(id));
    }

    @PostMapping("")
    public ResponseEntity<Response> createPost(@Valid @RequestBody PostCreateDto object){
        Post post = new Post();
        for (Long categoriesId : object.getCategoriesId() ){
            Category category = categoryService.findById(categoriesId);
            post.getCategories().add(category);
            category.getPosts().add(post);
            categoryService.update(category);
        }
        BeanUtils.copyProperties(object, post);
        postService.create(post);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(post.getId()).toUri();
        return ResponseEntity.created(uri).body(Response.builder()
                .timeStamp(LocalDateTime.now())
                .status(CREATED)
                .statusCode(CREATED.value())
                .message("Object created successfully! ID: " + post.getId())
                .build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Response> UpdatePost(@Valid @RequestBody PostDto object, @PathVariable Long id) {
        object.setId(id);
        Post post = new Post(object);
        for (Long categoriesId : object.getCategoriesId() ){
            Category category = categoryService.findById(categoriesId);
            post.getCategories().add(category);
            category.getPosts().add(post);
            categoryService.update(category);
        }
        postService.update(post);
        return ResponseEntity.ok(Response.builder()
                .timeStamp(LocalDateTime.now())
                .status(OK)
                .statusCode(OK.value())
                .message("Object updated successfully! ID: " + id)
                .build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Response> deletePost(@PathVariable Long id) {
        postService.delete(id);
        return ResponseEntity.ok(Response.builder()
                .timeStamp(LocalDateTime.now())
                .status(OK)
                .statusCode(OK.value())
                .message("Object deleted successfully! ID: " + id)
                .build());
    }

    @GetMapping("/by-title/{title}")
    public ResponseEntity<List<Post>> getByTitle(@PathVariable String title) {
        return ResponseEntity.ok(postService.findByTitle(title));
    }

    @GetMapping("/by-author/{idAuthor}")
    public ResponseEntity<List<Post>> getByAuthor(@PathVariable Long idAuthor) {
        return ResponseEntity.ok(postService.findByAuthor(idAuthor));
    }

    @GetMapping("/by-content/{content}")
    public ResponseEntity<List<Post>> getByContent(@PathVariable String content) {
        return ResponseEntity.ok(postService.findByContent(content));
    }
}
