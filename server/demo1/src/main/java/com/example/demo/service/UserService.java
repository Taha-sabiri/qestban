package com.example.demo.service;

import com.example.demo.controller.mapper.UserMapper;
import com.example.demo.dto.UserDto;
import com.example.demo.entity.UserEntity;
import com.example.demo.entity.UserLoginEntity;
import com.example.demo.repository.UserLoginRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserLoginRepository userLoginRepository;

    public UserDto AddUserService(String name, String lastName, String ntnCode, String mobile, String passwod){
       try {
           return UserMapper.toDto(userRepository.AddNewUser(name,lastName,ntnCode,mobile,passwod));
       }catch (Exception e){
           e.printStackTrace();
           return null;
       }
    }

    public UserDto LoginUser(String mobile, String password){
        try {
            return UserMapper.LoginUsertoDto(userLoginRepository.LoginUser(mobile,password));
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

}
