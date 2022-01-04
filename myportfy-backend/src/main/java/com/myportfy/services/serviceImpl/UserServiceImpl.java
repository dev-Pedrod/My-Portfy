package com.myportfy.services.serviceImpl;

import com.myportfy.domain.Post;
import com.myportfy.domain.User;
import com.myportfy.repositories.PostRepository;
import com.myportfy.repositories.UserRepository;
import com.myportfy.services.IUserService;
import com.myportfy.services.exceptions.ObjectNotFoundException;
import com.myportfy.utils.FillNullProperty;
import com.myportfy.utils.validators.NameValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static java.time.LocalDateTime.now;

@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PostRepository postRepository;

    @Override
    @Transactional(readOnly = true)
    public Page<User> findAll(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public User findById(Long id) {
        Optional<User> object = userRepository.findById(id);
        return object.orElseThrow(() -> new ObjectNotFoundException("Object not found! ID: "+ id));
    }

    @Override
    @Transactional
    public void create(User object) {
        object.setId(null);
        
        boolean isValid = NameValidator.validateUsername(object.getUsername());
        if (!isValid){
            throw new RuntimeException();
        }
        userRepository.saveAndFlush(object);
    }

    @Override
    @Transactional
    public void update(User object) {
        User updateObject = findById(object.getId());
        LocalDateTime createAt = updateObject.getCreatedAt();

        FillNullProperty.copyNonNullProperties(object, updateObject);

        updateObject.setCreatedAt(createAt);
        updateObject.setUpdatedAt(now());
        userRepository.save(updateObject);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        User user = findById(id);
        for(Post x : user.getPosts()){
            postRepository.delete(x);
        }
        user.getPosts().clear();
        user.setDeletedAt(now());
        userRepository.save(user);
    }

    @Override
    @Transactional(readOnly = true)
    public List<User> findByName(String name) {
        if(userRepository.findByFullNameStartsWithIgnoreCase(name).isEmpty())
            throw new ObjectNotFoundException("Object not found! name: " + name);
        return userRepository.findByFullNameStartsWithIgnoreCase(name);
    }

    @Override
    @Transactional(readOnly = true)
    public User findByEmail(String email) {
        if(userRepository.findByEmail(email) == null)
            throw new ObjectNotFoundException("Object not found! email: " + email);
        return userRepository.findByEmail(email);
    }

    @Override
    @Transactional(readOnly = true)
    public List<User> findByUsername(String username) {
        if(userRepository.findByUsernameStartsWithIgnoreCase(username).isEmpty() ){
            throw new ObjectNotFoundException("Object not found! username: " + username);
        }
        return userRepository.findByUsernameStartsWithIgnoreCase(username);
    }
}
