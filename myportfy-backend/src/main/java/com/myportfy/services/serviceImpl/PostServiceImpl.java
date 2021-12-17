package com.myportfy.services.serviceImpl;

import com.myportfy.domain.Post;
import com.myportfy.repositories.PostRepository;
import com.myportfy.services.IPostService;
import com.myportfy.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImpl implements IPostService {

    @Autowired
    private PostRepository postRepository;

    @Override
    @Transactional(readOnly = true)
    public Page<Post> findAll(Pageable pageable) {
        return postRepository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Post findById(Long id) {
        Optional<Post> object = postRepository.findById(id);
        return object.orElseThrow(() -> new ObjectNotFoundException("Object not found! ID: " + id));
    }

    @Override
    @Transactional
    public Post create(Post object) {
        object.setId(null);
        return postRepository.save(object);
    }

    @Override
    @Transactional
    public Post update(Post object) {
        Post newObject = findById(object.getId());
        newObject.setId(object.getId());
        newObject.setTitle(object.getTitle());
        newObject.setAuthor(object.getAuthor());
        newObject.setContent(object.getContent());
        return postRepository.save(newObject);
    }

    @Override
    public void delete(Long id) {
        findById(id);
        postRepository.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Post> findByTitle(String title) {
        List<Post> object = postRepository.findByTitleContainingIgnoreCase(title);
        if(object == null) {
            throw new ObjectNotFoundException("Object not found! Title: " + title);
        }
        return object;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Post> findByAuthor(String author) {
        List<Post> object = postRepository.findByAuthorStartsWithIgnoreCase(author);
        if(object == null) {
            throw new ObjectNotFoundException("Object not found! Author: " + author);
        }
        return object;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Post> findByContent(String content) {
        List<Post> object = postRepository.findByContentContainingIgnoreCase(content);
        if(object == null) {
            throw new ObjectNotFoundException("Object not found!");
        }
        return object;
    }
}
