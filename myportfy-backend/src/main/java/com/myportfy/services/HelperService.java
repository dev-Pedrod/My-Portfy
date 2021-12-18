package com.myportfy.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface HelperService<T> {
    Page<T> findAll(Pageable pageable);
    T findById(Long id);
    void create(T object);
    void update(T object);
    void delete(Long id);
}
