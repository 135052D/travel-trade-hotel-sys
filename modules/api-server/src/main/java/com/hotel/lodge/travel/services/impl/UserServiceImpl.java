package com.hotel.lodge.travel.services.impl;

import com.hotel.lodge.travel.db.Entity.User;
import com.hotel.lodge.travel.repository.UserRepository;
import com.hotel.lodge.travel.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service("bookService")
@Transactional
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public User save(User user){
        return this.userRepository.save(user);
    }

    @Override
    public List<User> getUsers() {
        return this.userRepository.findAll();
    }

}
