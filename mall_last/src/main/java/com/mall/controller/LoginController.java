package com.mall.controller;

import com.mall.base.domain.User;
import com.mall.controller.request.LoginRequest;
import com.mall.service.UserService;
import org.apache.shiro.authc.*;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;


@RequestMapping("/user")
@RestController
public class LoginController {
    @Resource
    private UserService userService;
    @PostMapping("/login")
    public Object login(@RequestBody LoginRequest request) {
        String msg;
        System.out.println(111);
        List<User> users = userService.checkUser(request);
        msg = "用户名或密码不正确";
        if(users.isEmpty()){
            return msg;
        }
        return users;
    }

}
