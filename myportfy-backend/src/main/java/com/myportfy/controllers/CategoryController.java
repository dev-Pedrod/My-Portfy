package com.myportfy.controllers;

import com.myportfy.controllers.exceptions.Response;
import com.myportfy.domain.Category;
import com.myportfy.dto.category.CategoryDto;
import com.myportfy.services.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private ICategoryService categoryService;

    @GetMapping("")
    public ResponseEntity<Page<CategoryDto>> getAll(Pageable pageable) {
        Page<Category> list = categoryService.findAll(pageable);
        Page<CategoryDto> listDto = list.map(CategoryDto::new);
        return ResponseEntity.ok(listDto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> getById(@PathVariable Long id) {
        return ResponseEntity.ok(categoryService.findById(id));
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @PostMapping("")
    public ResponseEntity<Response> createCategory(@Valid @RequestBody CategoryDto object) {
        Category newObject = new Category(object);
        categoryService.create(newObject);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newObject.getId()).toUri();
        return ResponseEntity.created(uri).body(Response.builder()
                .timeStamp(LocalDateTime.now())
                .status(CREATED)
                .statusCode(CREATED.value())
                .message("Object created successfully! ID: " + newObject.getId())
                .build());
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @PutMapping("/{id}")
    public  ResponseEntity<Response> updateCategory(@Valid @RequestBody CategoryDto object, @PathVariable Long id){
        object.setId(id);
        categoryService.update(new Category(object));
        return ResponseEntity.ok(Response.builder()
                .timeStamp(LocalDateTime.now())
                .status(OK)
                .statusCode(OK.value())
                .message("Object updated successfully! ID: " + id)
                .build());
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Response> deleteCategory(@PathVariable Long id) {
        categoryService.delete(id);
        return ResponseEntity.ok(Response.builder()
                .timeStamp(LocalDateTime.now())
                .status(OK)
                .statusCode(OK.value())
                .message("Object deleted successfully! ID: " + id)
                .build());
    }

    @GetMapping("/by-name/{name}")
    public ResponseEntity<List<CategoryDto>> getByName(@PathVariable String name) {
        List<Category> list = categoryService.findByName(name);
        List<CategoryDto> listDto = list.stream().map(CategoryDto::new).collect(Collectors.toList());
        return ResponseEntity.ok(listDto);
    }
}
