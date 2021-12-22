package com.myportfy.services.serviceImpl;

import com.myportfy.domain.User;
import com.myportfy.repositories.UserRepository;
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
public class UserServiceImpl implements IUserService {

    @Autowired
    private UserRepository userRepository;

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
        userRepository.save(object);
    }

    @Override
    @Transactional
    public void update(User object) {
        User updateObject = findById(object.getId());
        updateObject.setId(object.getId());
        updateObject.setUserName(object.getUserName());
        updateObject.setFirstName(object.getFirstName());
        updateObject.setLastName(object.getLastName());
        updateObject.setBirthDate(object.getBirthDate());
        updateObject.setGender(object.getGender());
        updateObject.setEmail(object.getEmail());
        updateObject.setUpdatedAt(now());
        userRepository.save(updateObject);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        User user = findById(id);
        user.setDeletedAt(now());
        userRepository.save(user);
    }

    @Override
    @Transactional(readOnly = true)
    public List<User> findByName(String name) {
        List<User> object = userRepository.findByFirstNameStartsWithIgnoreCase(name);
        if(object.isEmpty())
            throw new ObjectNotFoundException("Object not found! name: " + name);
        return object;
    }

    @Override
    @Transactional(readOnly = true)
    public User findByEmail(String email) {
        User user = userRepository.findByEmail(email);
        if(user == null)
            throw new ObjectNotFoundException("Object not found! email: " + email);
        return user;
    }
}
