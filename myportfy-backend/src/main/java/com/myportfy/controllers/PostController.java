package com.myportfy.controllers;

import com.myportfy.controllers.exceptions.Response;
import com.myportfy.domain.Post;
import com.myportfy.dto.post.PostDto;
import com.myportfy.services.IPostService;
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
public class PostController {

    @Autowired
    private IPostService postService;

    @GetMapping("/posts")
    public ResponseEntity<Page<Post>> getAll(Pageable pageable){
       return ResponseEntity.ok(postService.findAll(pageable));
    }
    @GetMapping("/posts/{id}")
    public ResponseEntity<Post> getById(@PathVariable Long id){
        return ResponseEntity.ok(postService.findById(id));
    }

    @PostMapping("/posts")
    public ResponseEntity<Response> createPost(@Valid @RequestBody Post object){
        postService.create(object);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(object.getId()).toUri();
        return ResponseEntity.created(uri).body(Response.builder()
                .timeStamp(LocalDateTime.now())
                .status(CREATED)
                .statusCode(CREATED.value())
                .message("Object created successfully! ID: " + object.getId())
                .build());
    }

    @PutMapping("/posts/{id}")
    public ResponseEntity<Response> UpdatePost(@Valid @RequestBody PostDto object, @PathVariable Long id) {
        object.setId(id);
        postService.update(new Post(object));
        return ResponseEntity.ok(Response.builder()
                .timeStamp(LocalDateTime.now())
                .status(OK)
                .statusCode(OK.value())
                .message("Object updated successfully! ID: " + id)
                .build());
    }

    @DeleteMapping("/posts/{id}")
    public ResponseEntity<Response> deletePost(@PathVariable Long id) {
        postService.delete(id);
        return ResponseEntity.ok(Response.builder()
                .timeStamp(LocalDateTime.now())
                .status(OK)
                .statusCode(OK.value())
                .message("Object deleted successfully! ID: " + id)
                .build());
    }

    @GetMapping("/posts-by-title/{title}")
    public ResponseEntity<List<Post>> getByTitle(@PathVariable String title) {
        List<Post> posts = postService.findByTitle(title);
        return ResponseEntity.ok(posts);
    }

    @GetMapping("/posts-by-author/{author}")
    public ResponseEntity<List<Post>> getByAuthor(@PathVariable String author) {
        List<Post> posts = postService.findByAuthor(author);
        return ResponseEntity.ok(posts);
    }

    @GetMapping("/posts-by-content/{content}")
    public ResponseEntity<List<Post>> getByContent(@PathVariable String content) {
        List<Post> posts = postService.findByContent(content);
        return ResponseEntity.ok(posts);
    }
}
