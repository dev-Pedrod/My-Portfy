package com.myportfy.services;

import com.myportfy.domain.Category;

public interface ICategoryService extends HelperService<Category>{
    Category findByNameContainingIgnoreCase(String name);
}
