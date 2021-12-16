package com.myportfy.controllers;

import com.myportfy.domain.Post;
import com.myportfy.services.IPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
public class PostController {

    @Autowired
    private IPostService postService;

    @GetMapping("/posts")
    public ResponseEntity<Page<Post>> findAll(Pageable pageable){
        Page<Post> list = postService.findAll(pageable);
       return ResponseEntity.ok(list);
    }
    @GetMapping("/posts/{id}")
    public ResponseEntity<Post> findById(@PathVariable Long id){
        return ResponseEntity.ok(postService.findById(id));
    }

    @PostMapping("/posts")
    public ResponseEntity<Void> create(@Valid @RequestBody Post object){
        postService.create(object);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(object.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/posts/{id}")
    public ResponseEntity<Post> UpdatePost(@Valid @RequestBody Post object, @PathVariable Long id) {
        postService.update(object);
        object.setId(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/posts/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        postService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
