package com.myportfy.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface HelperService<T> {
    Page<T> findAll(Pageable pageable);
    T findById(Long id);
    T create(T object);
    T update(T object);
    void delete(Long id);
}
