package com.myportfy.services;

import com.myportfy.domain.Category;

import java.util.List;

public interface ICategoryService extends IGenericService<Category> {
    List<Category> findByName(String name);
    List<Category> findAllById(List<Long> categoriesIds);
    void updateAllCategories(List<Category> objects);
}
