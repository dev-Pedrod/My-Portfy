package com.myportfy.services;

import com.myportfy.domain.Post;
import com.myportfy.dto.post.PostGetDto;

import java.awt.image.BufferedImage;
import java.util.List;

public interface IPostService extends IGenericService<Post, PostGetDto> {
    List<Post> findByTitle(String title);
    List<Post> findByAuthor(Long idAuthor);
    List<Post> findByContent(String content);
    void uploadImage(BufferedImage image, Post post, String fileName, Long userLoggedInId);
    void deleteImage(Post post, Long userLoggedInId);
}
