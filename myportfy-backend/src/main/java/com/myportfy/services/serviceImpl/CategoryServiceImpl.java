package com.myportfy.services.serviceImpl;

import com.myportfy.domain.Category;
import com.myportfy.repositories.CategoryRepository;
import com.myportfy.services.ICategoryService;
import com.myportfy.services.exceptions.DataIntegrityException;
import com.myportfy.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

import static java.time.LocalDateTime.now;

@Service
public class CategoryServiceImpl implements ICategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    @Transactional(readOnly = true)
    public Page<Category> findAll(Pageable pageable) {
        return categoryRepository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Category findById(Long id) {
        Optional<Category> object = categoryRepository.findById(id);
        return object.orElseThrow(() -> new ObjectNotFoundException("Category with id: "+id+" not found"));
    }

    @Override
    @Transactional
    public void create(Category object) {
        object.setId(null);
        object.setCreatedAt(now());
        categoryRepository.saveAndFlush(object);
    }

    @Override
    @Transactional
    public void update(Category object) {
        Category updateObject = findById(object.getId());
        updateObject.setId(object.getId());
        updateObject.setName(object.getName());
        updateObject.setUpdatedAt(now());
        categoryRepository.saveAndFlush(updateObject);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        Category category = findById(id);
        if(!category.getPosts().isEmpty()) {
            throw new DataIntegrityException("You cannot delete a category that has posts.");
        }
        categoryRepository.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Category> findByName(String name) {
        List<Category> object = categoryRepository.findByNameStartsWithIgnoreCase(name);
        if(object.isEmpty()) {
            throw new ObjectNotFoundException("Category with name: "+name+" not found");
        }
        return object;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Category> findAllById(List<Long> categoriesIds) {
        return categoryRepository.findAllById(categoriesIds);
    }

    @Override
    @Transactional()
    public void updateAllCategories(List<Category> objects) {
        categoryRepository.saveAllAndFlush(objects);
    }
}
