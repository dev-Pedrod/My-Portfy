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
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private IPostService postService;

    @GetMapping("")
    public ResponseEntity<Page<Post>> getAll(Pageable pageable){
       return ResponseEntity.ok(postService.findAll(pageable));
    }
    @GetMapping("/{id}")
    public ResponseEntity<Post> getById(@PathVariable Long id){
        return ResponseEntity.ok(postService.findById(id));
    }

    @PostMapping("")
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

    @PutMapping("/{id}")
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
