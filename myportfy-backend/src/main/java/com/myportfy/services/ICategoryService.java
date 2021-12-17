package com.myportfy.services;

import com.myportfy.domain.Category;

import java.util.List;

public interface ICategoryService extends HelperService<Category>{
    List<Category> findByName(String name);
}
