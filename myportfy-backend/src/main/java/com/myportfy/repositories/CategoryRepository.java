package com.myportfy.repositories;

import com.myportfy.domain.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    Category findByNameContainingIgnoreCase(String name);
}
