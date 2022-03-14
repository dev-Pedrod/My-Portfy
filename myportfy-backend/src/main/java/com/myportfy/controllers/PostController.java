package com.myportfy.controllers;

import com.myportfy.domain.Post;
import com.myportfy.dto.post.PostCreateDto;
import com.myportfy.dto.post.PostGetDto;
import com.myportfy.dto.post.PostUpdateDto;
import com.myportfy.services.ICategoryService;
import com.myportfy.services.IPostService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private IPostService postService;
    @Autowired
    private ICategoryService categoryService;
    @Autowired
    private ModelMapper modelMapper;

    @GetMapping("")
    public ResponseEntity<Page<PostGetDto>> getAll(Pageable pageable){
       return ResponseEntity.ok(postService.findAll(pageable)
               .map(x -> modelMapper.map(x, PostGetDto.class)));
    }
    @GetMapping("/{id}")
    public ResponseEntity<PostGetDto> getById(@PathVariable Long id){
        return ResponseEntity.ok(modelMapper.map(postService.findById(id), PostGetDto.class));
    }

    @PostMapping("")
    public ResponseEntity<Void> createPost(@Valid @RequestBody PostCreateDto object){
        Post post = new Post();
        if(object.getCategoriesId() != null) {
            object.getCategoriesId().forEach(x -> post.getCategories().add(categoryService.findById(x)));
            post.getCategories().forEach(x -> categoryService.update(x));
        }
        BeanUtils.copyProperties(object, post);
        postService.create(post);
        return ResponseEntity.created(ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(post.getId())
                .toUri()).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> UpdatePost(@Valid @RequestBody PostUpdateDto object, @PathVariable Long id) {
        object.setId(id);
        Post post = modelMapper.map(object, Post.class);
        if(object.getCategoriesId() != null) {
            object.getCategoriesId().forEach(x -> post.getCategories().add(categoryService.findById(x)));
            post.getCategories().forEach(x -> categoryService.update(x));
        }
        postService.update(post);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Long id) {
        postService.delete(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/by-title/{title}")
    public ResponseEntity<List<PostGetDto>> getByTitle(@PathVariable String title) {
        return ResponseEntity.ok(postService.findByTitle(title)
                .stream()
                .map(x -> modelMapper.map(x, PostGetDto.class))
                .collect(Collectors.toList()));
    }

    @GetMapping("/by-author/{idAuthor}")
    public ResponseEntity<List<PostGetDto>> getByAuthor(@PathVariable Long idAuthor) {
        return ResponseEntity.ok(postService.findByAuthor(idAuthor)
                .stream()
                .map(x -> modelMapper.map(x, PostGetDto.class))
                .collect(Collectors.toList()));
    }

    @GetMapping("/by-content/{content}")
    public ResponseEntity<List<PostGetDto>> getByContent(@PathVariable String content) {
        return ResponseEntity.ok(postService.findByContent(content)
                .stream()
                .map(x -> modelMapper.map(x, PostGetDto.class))
                .collect(Collectors.toList()));
    }
}
