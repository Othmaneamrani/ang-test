package org.btb.product.service;


import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.btb.product.entities.User;
import org.btb.product.repository.IUserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Transactional
@Service
public class UserServiceImpl implements IUserService{

    private IUserRepository iUserRepository;

    @Override
    public User signUp(User user) {
        Optional<User> byUsername = iUserRepository.findByUsername(user.getUsername());
        if(byUsername.isPresent()){
            throw new RuntimeException("Username already used.");
        }
        return iUserRepository.save(user);
    }

    @Override
    public User login(User user) {
        List<User> all = iUserRepository.findAll();
        for (User u : all){
            if(u.getUsername().equals(user.getUsername()) && u.getPassword().equals(user.getPassword()) ){
                return u;
            }
        }
        return null;
    }

    @Override
    public User getUserById(int id) {
        return iUserRepository.findById(id).get();
    }
}
