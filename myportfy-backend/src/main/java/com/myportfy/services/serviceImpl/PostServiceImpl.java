package com.myportfy.services.serviceImpl;

import com.myportfy.domain.Post;
import com.myportfy.repositories.PostRepository;
import com.myportfy.services.IPostService;
import com.myportfy.services.IUserService;
import com.myportfy.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

import static java.time.LocalDateTime.now;

@Service
public class PostServiceImpl implements IPostService {

    @Autowired
    private PostRepository postRepository;
    @Autowired
    private IUserService userService;

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
    public void create(Post object) {
        object.setId(null);
        postRepository.save(object);
    }

    @Override
    @Transactional
    public void update(Post object) {
        Post updateObject = findById(object.getId());
        updateObject.setId(object.getId());
        updateObject.setTitle(object.getTitle());
        updateObject.setContent(object.getContent());
        updateObject.setDescription(object.getDescription());
        updateObject.setUpdatedAt(now());
        postRepository.save(updateObject);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        findById(id);
        postRepository.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Post> findByTitle(String title) {
        List<Post> object = postRepository.findByTitleContainingIgnoreCase(title);
        if(object.isEmpty()) {
            throw new ObjectNotFoundException("Object not found! Title: " + title);
        }
        return object;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Post> findByAuthor(Long idAuthor) {
        List<Post> object = postRepository.findByAuthor(idAuthor);
        if(object.isEmpty()) {
            throw new ObjectNotFoundException("Object not found! Author: " + idAuthor);
        }
        return object;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Post> findByContent(String content) {
        List<Post> object = postRepository.findByContentContainingIgnoreCase(content);
        if(object.isEmpty()) {
            throw new ObjectNotFoundException("Object not found!");
        }
        return object;
    }
}
