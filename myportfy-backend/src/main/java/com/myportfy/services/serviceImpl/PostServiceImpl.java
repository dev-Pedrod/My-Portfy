package com.myportfy.services.serviceImpl;

import com.myportfy.domain.Post;
import com.myportfy.domain.User;
import com.myportfy.repositories.PostRepository;
import com.myportfy.security.UserPrincipal;
import com.myportfy.services.IImageService;
import com.myportfy.services.IPostService;
import com.myportfy.services.IS3Service;
import com.myportfy.services.IUserService;
import com.myportfy.services.exceptions.AuthorizationException;
import com.myportfy.services.exceptions.ObjectNotFoundException;
import com.myportfy.utils.FillNullProperty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.myportfy.domain.enums.Role.ADMIN;
import static java.time.LocalDateTime.now;

@Service
public class PostServiceImpl implements IPostService {

    @Autowired
    private PostRepository postRepository;
    @Autowired
    private IUserService userService;
    @Autowired
    private IImageService imageService;
    @Autowired
    private IS3Service s3Service;

    @Override
    @Transactional(readOnly = true)
    public Page<Post> findAll(Pageable pageable) {
        Page<Post> posts = postRepository.findAll(pageable);
        postRepository.findAllPosts(posts.stream().collect(Collectors.toList()));
        return posts;
    }

    @Override
    @Transactional(readOnly = true)
    public Post findById(Long id) {
        Optional<Post> object = postRepository.findById(id);
        return object.orElseThrow(() -> new ObjectNotFoundException("Post with id: "+id+" not found"));
    }

    @Override
    @Transactional
    public void create(Post object) {
        User author = userService.findById(userService.currentUserLoggedIn().getId());
        if(!author.getIsEnabled()) {
            throw new AuthorizationException("Access denied. Confirm your email to publish");
        }
        object.setCreatedAt(now());
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
            throw new ObjectNotFoundException("Post with title: "+title+" not found");
        }
        return object;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Post> findByAuthor(Long idAuthor) {
        List<Post> object = postRepository.findByAuthor(idAuthor);
        if(object.isEmpty()) {
            throw new ObjectNotFoundException("Post with author id: "+idAuthor+" not found");
        }
        return object;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Post> findByContent(String content) {
        List<Post> object = postRepository.findByContentContainingIgnoreCase(content);
        if(object.isEmpty()) {
            throw new ObjectNotFoundException("Post not found");
        }
        return object;
    }

    @Transactional
    public URI uploadImage(MultipartFile multipartFile, Post post) {
        if(!post.getAuthor().getId().equals(userService.currentUserLoggedIn().getId())) {
            throw new AuthorizationException("Access denied");
        }
        URI uri = s3Service.uploadFile(
                    imageService.getInputStream(imageService.getJpgImageFromFile(multipartFile), "jpg"),
                    "POST-" + UUID.randomUUID(),
                    "image");
        post.setImageURL(uri.toString());
        postRepository.saveAndFlush(post);
        return uri;
    }
}
