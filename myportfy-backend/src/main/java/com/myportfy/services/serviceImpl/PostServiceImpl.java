package com.myportfy.services.serviceImpl;

import com.myportfy.domain.Post;
import com.myportfy.domain.User;
import com.myportfy.repositories.PostRepository;
import com.myportfy.security.UserPrincipal;
import com.myportfy.services.IPostService;
import com.myportfy.services.IUserService;
import com.myportfy.services.exceptions.AuthorizationException;
import com.myportfy.services.exceptions.ObjectNotFoundException;
import com.myportfy.utils.FillNullProperty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static com.myportfy.domain.enums.Role.ADMIN;
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
        User author = userService.findById(userService.currentUserLoggedIn().getId());
        if(!author.getEnabled()) {
            throw new AuthorizationException("Access denied. Confirm your email to publish");
        }
        object.setAuthor(author);
        object.setId(null);
        postRepository.saveAndFlush(object);
    }

    @Override
    @Transactional
    public void update(Post object) {
        Post updateObject = findById(object.getId());
        LocalDateTime createAt = updateObject.getCreatedAt();

        FillNullProperty.copyNonNullProperties(object, updateObject);

        UserPrincipal user = userService.currentUserLoggedIn();
        if(!user.hasRole(ADMIN) && !updateObject.getAuthor().getId().equals(user.getId())){
            throw new AuthorizationException("Access denied");
        }

        updateObject.setCreatedAt(createAt);
        updateObject.setUpdatedAt(now());
        postRepository.save(updateObject);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        Post post = findById(id);
        UserPrincipal user = userService.currentUserLoggedIn();
        if(!user.hasRole(ADMIN) && !post.getAuthor().getId().equals(user.getId())){
            throw new AuthorizationException("Access denied");
        }
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
