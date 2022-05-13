package com.myportfy.services;

import com.myportfy.domain.Post;

import java.util.List;

public interface IPostService extends IGenericService<Post> {
    List<Post> findByTitle(String title);
    List<Post> findByAuthor(Long idAuthor);
    List<Post> findByContent(String content);
}
