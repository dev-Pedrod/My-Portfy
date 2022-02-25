package com.myportfy.services;

import com.myportfy.domain.Post;

import java.util.List;

public interface IPostService extends IGenericService<Post> {
    public List<Post> findByTitle(String title);
    public List<Post> findByAuthor(Long idAuthor);
    public List<Post> findByContent(String content);
}
