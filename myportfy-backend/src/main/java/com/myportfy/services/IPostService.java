package com.myportfy.services;

import com.myportfy.domain.Post;

import java.util.List;

public interface IPostService extends HelperService<Post>{
    public Post findByTitle(String title);
    public Post findByAuthor(String author);
    public Post findByContent(String content);
    public List<Post> findPostByCategoriesName(String categoryName);
}
