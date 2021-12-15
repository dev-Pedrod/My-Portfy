package com.myportfy.repositories;

import com.myportfy.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    Post findByTitleContainingIgnoreCase(String title);
    Post findByAuthorContainingIgnoreCase(String author);
    Post findByContentLikeIgnoreCase(String content);
    List<Post> findPostByCategoriesName(String categoryName);
}
