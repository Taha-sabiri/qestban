package com.example.demo.controller.mapper;

import com.example.demo.dto.UserDto;
import com.example.demo.entity.UserEntity;
import com.example.demo.entity.UserLoginEntity;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class UserMapper {

    public static UserDto toDto(UserEntity userEntity) {
        UserDto dto = new UserDto();
        dto.setUserId(userEntity.getId());
        dto.setName(userEntity.getName());
        dto.setLastName(userEntity.getLastName());
        dto.setNtnCode(userEntity.getNtnCode());
        dto.setMobileNumber(userEntity.getMobileNumber());
        dto.setToken(userEntity.getToken());
        return dto;
    }

    public static UserDto LoginUsertoDto(UserLoginEntity userEntity) {
        UserDto dto = new UserDto();
        dto.setUserId(userEntity.getId());
        dto.setName(userEntity.getName());
        dto.setLastName(userEntity.getLastName());
        dto.setNtnCode(userEntity.getNtnCode());
        dto.setMobileNumber(userEntity.getMobileNumber());
        dto.setToken(userEntity.getToken());
        return dto;
    }
}
