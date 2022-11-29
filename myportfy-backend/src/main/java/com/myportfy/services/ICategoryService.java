package com.myportfy.services;

import com.myportfy.domain.Category;
import com.myportfy.dto.category.CategoryDto;

import java.util.List;

public interface ICategoryService extends IGenericService<Category, CategoryDto> {
    List<Category> findByName(String name);
    List<Category> findAllById(List<Long> categoriesIds);
    void updateAllCategories(List<Category> objects);
}
