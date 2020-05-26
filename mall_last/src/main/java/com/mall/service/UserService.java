package com.mall.service;

import com.mall.base.domain.User;
import com.mall.base.domain.UserExample;
import com.mall.base.mapper.UserMapper;
import com.mall.controller.request.LoginRequest;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class UserService {
    @Resource
    private UserMapper userMapper;

    public List<User> checkUser(LoginRequest request){
        String username = request.getUsername();
        String password = request.getPassword();
        UserExample userExample = new UserExample();
        userExample.createCriteria().andUsernameEqualTo(username).andPasswordEqualTo(password);
        List<User> users = userMapper.selectByExample(userExample);
        return users;
    }
    public boolean validateUser(User user){
        String username = user.getUsername();
        String phone = user.getPhone();
        String password = user.getPassword();
        UserExample userExample = new UserExample();
        userExample.createCriteria().andUsernameEqualTo(username);
        List<User> users = userMapper.selectByExample(userExample);
        if (users.isEmpty()){
            return true;
        }else {
            return false;
        }
    }
    public void insertUser(User user){
         userMapper.insert(user);
    }

}
