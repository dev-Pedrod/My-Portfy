package com.myportfy.controllers;

import com.myportfy.domain.Category;
import com.myportfy.dto.category.CategoryDto;
import com.myportfy.services.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private ICategoryService categoryService;

    @GetMapping("")
    public ResponseEntity<Page<CategoryDto>> getAll(Pageable pageable) {
        Page<Category> list = categoryService.findAll(pageable);
        Page<CategoryDto> listDto = list.map(obj -> new CategoryDto(obj));
        return ResponseEntity.ok(listDto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> getById(@PathVariable Long id) {
        return ResponseEntity.ok(categoryService.findById(id));
    }

    @PostMapping("")
    public ResponseEntity<Category> createCategory(@Valid @RequestBody Category object) {
        categoryService.create(object);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(object.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    public  ResponseEntity<Category> updateCategory(@Valid @RequestBody CategoryDto object, @PathVariable Long id){
        object.setId(id);
        categoryService.update(new Category(object));
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable Long id) {
        categoryService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{name}")
    public ResponseEntity<List<CategoryDto>> getByName(@PathVariable String name) {
        List<Category> list = categoryService.findByName(name);
        List<CategoryDto> listDto = list.stream().map(obj -> new CategoryDto(obj)).collect(Collectors.toList());
        return ResponseEntity.ok(listDto);
    }
}
