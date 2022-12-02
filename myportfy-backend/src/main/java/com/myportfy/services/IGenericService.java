package com.myportfy.services;

import com.myportfy.domain.DomainEntity;
import com.myportfy.dto.DtoDomain;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IGenericService<T extends DomainEntity, R extends DtoDomain> {
    Page<R> findAll(Pageable pageable);
    Page<?> findAllGeneric(Pageable pageable);
    T findById(Long id);
    void create(T object);
    void create(T object, Object arg);
    T update(T object);
    T update(T object, Object arg);
    void delete(Long id);
}
