package com.hotel.lodge.travel.services;

import com.hotel.lodge.travel.db.Entity.User;

import java.util.List;

public interface UserService {

    User save(User user);

    List<User> getUsers();
}
