package com.myportfy.services.serviceImpl;

import com.myportfy.domain.Category;
import com.myportfy.domain.Post;
import com.myportfy.domain.User;
import com.myportfy.dto.UserPrincipal;
import com.myportfy.dto.post.PostGetDto;
import com.myportfy.repositories.PostRepository;
import com.myportfy.services.ICategoryService;
import com.myportfy.services.IPostService;
import com.myportfy.services.IS3Service;
import com.myportfy.services.IUserService;
import com.myportfy.services.exceptions.AuthorizationException;
import com.myportfy.services.exceptions.ObjectNotFoundException;
import com.myportfy.utils.FillNullProperty;
import com.myportfy.utils.image.ImageUtils;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.awt.image.BufferedImage;
import java.net.URI;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import static com.myportfy.domain.enums.Role.ADMIN;
import static java.time.LocalDateTime.now;

@Service
@Slf4j
public class PostServiceImpl implements IPostService {

    private final String POST_NOT_FOUND_MESSAGE = "Nenhuma postagem encontrada... 😥";
    private final String CREATE_AUTHORIZARTION_EXCEPTION_MESSAGE = "Você precisa confirmar seu e-mail para fazer postagens...";
    private final String DELETE_AUTHORIZARTION_EXCEPTION_MESSAGE = "Você não pode deletar a postagem de outras pessoas... 🤨";
    private final String UPDATE_AUTHORIZARTION_EXCEPTION_MESSAGE = "Você não pode alterar a postagem de outras pessoas... 🤨";

    @Autowired
    private PostRepository postRepository;
    @Autowired
    private IUserService userService;
    @Autowired
    private ICategoryService categoryService;
    @Autowired
    private IS3Service s3Service;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    @Transactional(readOnly = true)
    public Page<PostGetDto> findAll(Pageable pageable) {
        log.info("Fetching all posts");
        Page<Post> posts = postRepository.findAll(pageable);
        postRepository.findAllPosts(posts.stream().collect(Collectors.toList()));
        return posts.map(x -> modelMapper.map(x, PostGetDto.class));
    }

    @Override
    public Page<?> findAllGeneric(Pageable pageable) {
        return null;
    }

    @Override
    @Transactional(readOnly = true)
    public Post findById(Long id) {
        log.info("Fetching post by id {}", id);
        Optional<Post> object = postRepository.findById(id);
        return object.orElseThrow(() -> {
            log.error("Post with id: {} not found", id);
            return new ObjectNotFoundException(POST_NOT_FOUND_MESSAGE);
        });
    }

    @Override
    public void create(Post object) {
    }

    @Override
    public void create(Post object, Object arg) {
        addCategoriesToPost(object, arg);

        User author = userService.findById(userService.currentUserLoggedIn().getId());
        if (!author.getIsEmailEnabled()) {
            log.error("Authorization exception for user {} on create post", author.getUsername());
            throw new AuthorizationException(CREATE_AUTHORIZARTION_EXCEPTION_MESSAGE);
        }
        clearProps(object);

        object.setCreatedAt(now());
        object.setAuthor(author);
        object.setId(null);
        postRepository.saveAndFlush(object);
        log.info("New post by {} created. id: {}", author.getUsername(), object.getId());
    }

    @Override
    @Transactional
    public Post update(Post object) {
        return null;
    }

    @Override
    public Post update(Post object, Object arg) {
        Post updateObject = findById(object.getId());
        LocalDateTime createAt = updateObject.getCreatedAt();

        clearProps(object);
        addCategoriesToPost(object, arg);

        if (object.getCategories().isEmpty()) {
            object.setCategories(updateObject.getCategories());
        }

        FillNullProperty.copyNonNullProperties(object, updateObject);

        UserPrincipal user = userService.currentUserLoggedIn();
        if (!user.hasRole(ADMIN) && !updateObject.getAuthor().getId().equals(user.getId())) {
            log.error("Authorization exception for user {} on update post", user.getUsername());
            throw new AuthorizationException(UPDATE_AUTHORIZARTION_EXCEPTION_MESSAGE);
        }

        updateObject.setCreatedAt(createAt);
        updateObject.setUpdatedAt(now());
        log.info("Post {} updated by {}", updateObject.getId(), user.getUsername());
        return postRepository.save(updateObject);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        Post post = findById(id);
        UserPrincipal user = userService.currentUserLoggedIn();
        if (!user.hasRole(ADMIN) && !post.getAuthor().getId().equals(user.getId())) {
            log.error("Authorization exception for user {} on delete post", user.getUsername());
            throw new AuthorizationException(DELETE_AUTHORIZARTION_EXCEPTION_MESSAGE);
        }
        if (post.getImageURL() != null) {
            deleteImage(post, user.getId());
        }
        log.info("post {} deleted by {}", post.getId(), user.getUsername());
        postRepository.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Post> findByTitle(String title) {
        List<Post> object = postRepository.findByTitleContainingIgnoreCase(title);
        log.info("Fetching post by title: {}", title);
        if (object.isEmpty()) {
            log.error("Post with title: {} not found", title);
            throw new ObjectNotFoundException(POST_NOT_FOUND_MESSAGE);
        }
        return object;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Post> findByAuthor(Long idAuthor) {
        List<Post> object = postRepository.findByAuthor(idAuthor);
        log.info("Fetching post by author id: {}", idAuthor);
        if (object.isEmpty()) {
            log.error("Post with author id: {} not found", idAuthor);
            throw new ObjectNotFoundException(POST_NOT_FOUND_MESSAGE);
        }
        return object;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Post> findByContent(String content) {
        List<Post> object = postRepository.findByContentContainingIgnoreCase(content);
        log.info("Fetching post by content: {}", content);
        if (object.isEmpty()) {
            log.error("Post with content: {} not found", content);
            throw new ObjectNotFoundException(POST_NOT_FOUND_MESSAGE);
        }
        return object;
    }

    @Override
    @Async
    @Transactional
    public void uploadImage(BufferedImage image, Post post, String fileName, Long userLoggedInId) {
        if (!post.getAuthor().getId().equals(userLoggedInId)) {
            log.error("Authorization exception for user {} on delete post", userLoggedInId);
            throw new AuthorizationException(UPDATE_AUTHORIZARTION_EXCEPTION_MESSAGE);
        }
        URI uri = s3Service.uploadFile(
                ImageUtils.getInputStream(image, "jpg"),
                fileName,
                "image");

        if (post.getImageURL() != null) {
            deleteImage(post, userLoggedInId);
        }
        post.setImageURL(uri.toString());
        postRepository.saveAndFlush(post);
        log.info("Image added to post: {}", post.getId());
    }

    @Override
    @Transactional
    public void deleteImage(Post post, Long userLoggedInId) {
        User user = userService.findById(userLoggedInId);

        if (!user.getRoles().contains(ADMIN) && !post.getAuthor().getId().equals(user.getId())) {
            log.error("Authorization exception for user {} on delete image from post", userLoggedInId);
            throw new AuthorizationException(UPDATE_AUTHORIZARTION_EXCEPTION_MESSAGE);
        }

        String imageUrl = post.getImageURL();
        s3Service.deletePicture(imageUrl.substring(imageUrl.length() - 41));
        post.setImageURL(null);
        postRepository.saveAndFlush(post);
        log.info("Image deleted from post: {}", post.getId());
    }

    private void clearProps(Post object) {
        String cleanDescription = "";
        String cleanTitle = "";
        object.setContent(object.getContent().trim());

        if (object.getDescription() != null) {
            cleanDescription = object.getDescription().replaceAll("\\s+", " ").trim();
        }
        if (object.getTitle() != null) {
            cleanTitle = object.getTitle().replaceAll("\\s+", " ").trim();
        }

        object.setDescription(cleanDescription);
        object.setTitle(cleanTitle);
    }

    private void addCategoriesToPost(Post object, Object args) {
        List<Category> categories = categoryService.findAllById(new ArrayList<>((Set<Long>) args));
        if (!categories.isEmpty()) {
            object.getCategories().addAll(categories);
        } else {
            // Add base category
            log.info("No category found, adding base category to post: {}", object.getId());
            object.getCategories().add(categoryService.findById(1L));
        }
    }
}
