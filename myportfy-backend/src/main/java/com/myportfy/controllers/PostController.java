package com.myportfy.controllers;

import com.myportfy.domain.Post;
import com.myportfy.dto.post.PostCreateDto;
import com.myportfy.dto.post.PostGetDto;
import com.myportfy.dto.post.PostUpdateDto;
import com.myportfy.services.ICategoryService;
import com.myportfy.services.IImageService;
import com.myportfy.services.IPostService;
import com.myportfy.services.IUserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private IPostService postService;
    @Autowired
    private ICategoryService categoryService;
    @Autowired
    private IUserService userService;
    @Autowired
    private IImageService imageService;
    @Autowired
    private ModelMapper modelMapper;
    @Value("${S3URL}")
    private URI S3URI;

    @GetMapping("")
    public ResponseEntity<Page<?>> getAll(Pageable pageable){
       return ResponseEntity.ok(postService.findAll(pageable));
    }
    @GetMapping("/{id}")
    public ResponseEntity<PostGetDto> getById(@PathVariable Long id){
        return ResponseEntity.ok(modelMapper.map(postService.findById(id), PostGetDto.class));
    }

    @PostMapping
    public ResponseEntity<Void> createPost(@Valid @RequestBody PostCreateDto object){
        Post post = new Post();
        BeanUtils.copyProperties(object, post);
        postService.create(post, object.getCategoriesId());
        return ResponseEntity.created(ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(post.getId())
                .toUri()).build();
    }

    @PostMapping("/upload-image/{postId}")
    public ResponseEntity<Void> uploadImage(@RequestParam(name = "file") MultipartFile image, @PathVariable Long postId) {
        String fileName = "POST-" + UUID.randomUUID();
        URI uri = URI.create(S3URI + fileName);
        postService.uploadImage(
                imageService.getJpgImageFromFile(image),
                postService.findById(postId),
                fileName,
                userService.currentUserLoggedIn().getId());
        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Post> UpdatePost(@Valid @RequestBody PostUpdateDto object, @PathVariable Long id) {
        object.setId(id);
        Post post = modelMapper.map(object, Post.class);
        post.getCategories().clear();
        return ResponseEntity.ok(postService.update(post, object.getCategoriesId()));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Long id) {
        postService.delete(id);
        return ResponseEntity.noContent().build();
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

    @DeleteMapping("/delete-image/{id}")
    public ResponseEntity<Void> deleteImage(@PathVariable Long id) {
        postService.deleteImage(postService.findById(id), userService.currentUserLoggedIn().getId());
        return ResponseEntity.noContent().build();
    }
}
