package com.myportfy.repositories;

import com.myportfy.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByTitleContainingIgnoreCase(String title);
    List<Post> findByContentContainingIgnoreCase(String content);
    @Query("SELECT obj FROM Post obj WHERE obj.author.id = ?1")
    List<Post> findByAuthor(Long authorId);

}
