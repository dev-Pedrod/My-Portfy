package com.myportfy.controllers;

import com.myportfy.domain.Template;
import com.myportfy.dto.template.NavbarDto;
import com.myportfy.services.ITemplateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/templates")
public class TemplateController {

    @Autowired
    private ITemplateService templateService;

    @PostMapping
    public ResponseEntity<Void> createTemplate(@RequestBody Template object) {
        templateService.create(object);
        return ResponseEntity.created(ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(object.getId())
                .toUri()).build();
    }

    @PutMapping("/navbar")
    public ResponseEntity<Void> updateNavbar(@RequestBody NavbarDto object) {
        templateService.saveNavbar(object);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Template> GetById(@PathVariable Long id) {
        return ResponseEntity.ok(templateService.findById(id));
    }
}
