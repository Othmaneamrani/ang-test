package org.btb.product.service;
import org.btb.product.entities.User;


public interface IUserService {

    User signUp (User user);
    User login (User user);
    User getUserById(int id);

}
