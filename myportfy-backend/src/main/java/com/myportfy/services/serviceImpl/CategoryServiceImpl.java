package com.myportfy.services.serviceImpl;

import com.myportfy.domain.Category;
import com.myportfy.repositories.CategoryRepository;
import com.myportfy.services.ICategoryService;
import com.myportfy.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

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
        return object.orElseThrow(() -> new ObjectNotFoundException("Object not found! ID: " + id));
    }

    @Override
    @Transactional
    public Category create(Category object) {
        object.setId(null);
        return categoryRepository.save(object);
    }

    @Override
    @Transactional
    public Category update(Category object) {
        Category newObject = findById(object.getId());
        newObject.setId(object.getId());
        newObject.setName(object.getName());
        return categoryRepository.save(newObject);
    }

    @Override
    public void delete(Long id) {
        findById(id);
        categoryRepository.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Category findByName(String name) {
        Category object = categoryRepository.findByNameStartsWithIgnoreCase(name);
        if(object == null) {
            throw new ObjectNotFoundException("Object not found! Name: " + name);
        }
        return object;
    }
}
