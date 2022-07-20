package com.myportfy.services.serviceImpl;

import com.myportfy.domain.Category;
import com.myportfy.repositories.CategoryRepository;
import com.myportfy.services.ICategoryService;
import com.myportfy.services.exceptions.DataIntegrityException;
import com.myportfy.services.exceptions.ObjectNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

import static java.time.LocalDateTime.now;

@Service
@Slf4j
public class CategoryServiceImpl implements ICategoryService {

    private final String CATEGORY_NOT_FOUND_MESSAGE = "Nenhuma categoria encontrada... 😥";
    private final String DATA_INTEGRITY_MESSAGE = "Não é possível deletar categorias que possuem posts.";

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    @Transactional(readOnly = true)
    public Page<Category> findAll(Pageable pageable) {
        log.info("Returning all categories");
        return categoryRepository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Category findById(Long id) {
        Optional<Category> object = categoryRepository.findById(id);
        log.info("Fetching category by id: {}", id);
        return object.orElseThrow(()  -> {
            log.error("Category with id: {} not found", id);
            return new ObjectNotFoundException(CATEGORY_NOT_FOUND_MESSAGE);
        });
    }

    @Override
    @Transactional
    public void create(Category object) {
        object.setId(null);
        object.setCreatedAt(now());
        log.info("New category created: {}", object.getName());
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
        log.info("Update category: {}", updateObject.getId());
    }

    @Override
    @Transactional
    public void delete(Long id) {
        Category category = findById(id);
        if(!category.getPosts().isEmpty()) {
            log.error("Data integrity violation when trying to delete category by id: {}", id);
            throw new DataIntegrityException(DATA_INTEGRITY_MESSAGE);
        }
        log.info("Deleting category: {}", id);
        categoryRepository.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Category> findByName(String name) {
        List<Category> object = categoryRepository.findByNameStartsWithIgnoreCase(name);
        if(object.isEmpty()) {
            log.error("Not found category with name: {}", name);
            throw new ObjectNotFoundException(CATEGORY_NOT_FOUND_MESSAGE);
        }
        return object;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Category> findAllById(List<Long> categoriesIds) {
        log.info("Fetching all categories by ids: {}", categoriesIds);
        return categoryRepository.findAllById(categoriesIds);
    }

    @Override
    @Transactional()
    public void updateAllCategories(List<Category> objects) {
        log.info("Update all categories: {}", objects);
        categoryRepository.saveAllAndFlush(objects);
    }
}
