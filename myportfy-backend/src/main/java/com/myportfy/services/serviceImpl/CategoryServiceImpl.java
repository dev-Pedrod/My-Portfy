package com.myportfy.services.serviceImpl;

import com.myportfy.domain.Category;
import com.myportfy.repositories.CategoryRepository;
import com.myportfy.services.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
        return categoryRepository.findById(id).get();
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
        return categoryRepository.findByNameStartsWithIgnoreCase(name);
    }
}
