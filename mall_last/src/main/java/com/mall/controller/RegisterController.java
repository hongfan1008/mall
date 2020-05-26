package com.mall.controller;

import com.mall.base.domain.User;
import com.mall.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RequestMapping("/user")
@RestController
public class RegisterController {
    @Resource
    private UserService userService;
    @PostMapping("/register")
    public Object register(@RequestBody User user){
        String msg;
        boolean flag = userService.validateUser(user);
        if (!flag){
            msg = "用户名已占用";
            return msg;
        }else {
            userService.insertUser(user);
            return user;
        }
    }
}
