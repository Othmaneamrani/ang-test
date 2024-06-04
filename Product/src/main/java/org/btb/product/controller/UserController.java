package org.btb.product.controller;


import lombok.AllArgsConstructor;
import org.btb.product.entities.User;
import org.btb.product.service.IUserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class UserController {

    private IUserService iUserService;



    @PostMapping("/sign")
    User signUp (@RequestBody User user){
        return iUserService.signUp(user);
    }


    @PostMapping("/login")
    User login (@RequestBody User user){
        return iUserService.login(user);
    }



    @GetMapping("/{id}")
    User getUserById(@PathVariable int id){
        return iUserService.getUserById(id);
    }




}
