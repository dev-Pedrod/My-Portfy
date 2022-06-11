package com.myportfy.services;

import com.myportfy.domain.Post;
import org.springframework.web.multipart.MultipartFile;

import java.net.URI;
import java.util.List;

public interface IPostService extends IGenericService<Post> {
    List<Post> findByTitle(String title);
    List<Post> findByAuthor(Long idAuthor);
    List<Post> findByContent(String content);
    URI uploadImage(MultipartFile multipartFile, Post post);
}
