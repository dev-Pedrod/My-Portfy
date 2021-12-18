package com.myportfy.repositories;

import com.myportfy.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByTitleContainingIgnoreCase(String title);
    List<Post> findByAuthorStartsWithIgnoreCase(String author);
    List<Post> findByContentContainingIgnoreCase(String content);
}
