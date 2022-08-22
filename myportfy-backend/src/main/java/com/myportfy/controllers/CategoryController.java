package com.myportfy.controllers;

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
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private ICategoryService categoryService;

    @GetMapping("")
    public ResponseEntity<Page<CategoryDto>> getAll(Pageable pageable) {
        return ResponseEntity.ok(categoryService.findAll(pageable).map(CategoryDto::new));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> getById(@PathVariable Long id) {
        return ResponseEntity.ok(categoryService.findById(id));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("")
    public ResponseEntity<Void> createCategory(@Valid @RequestBody CategoryDto object) {
        Category newObject = new Category(object);
        categoryService.create(newObject);
        return ResponseEntity.created(ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(newObject.getId())
                .toUri()).build();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{id}")
    public  ResponseEntity<Void> updateCategory(@Valid @RequestBody CategoryDto object, @PathVariable Long id){
        object.setId(id);
        categoryService.update(new Category(object));
        return ResponseEntity.ok().build();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable Long id) {
        categoryService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/by-name/{name}")
    public ResponseEntity<List<CategoryDto>> getByName(@PathVariable String name) {
        return ResponseEntity.ok(categoryService.findByName(name)
                .stream()
                .map(CategoryDto::new)
                .collect(Collectors.toList()));
    }
}
