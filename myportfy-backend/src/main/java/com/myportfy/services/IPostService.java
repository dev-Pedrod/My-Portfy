package com.myportfy.services;

import com.myportfy.domain.Post;

import java.util.List;

public interface IPostService extends HelperService<Post>{
    public List<Post> findByTitle(String title);
    public List<Post> findByAuthor(String author);
    public List<Post> findByContent(String content);
}
