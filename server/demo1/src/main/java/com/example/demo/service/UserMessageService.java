package com.example.demo.service;

import com.example.demo.entity.UserMessageEntity;
import com.example.demo.repository.UserMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserMessageService {

    @Autowired
    private UserMessageRepository userMessageRepository;

    public List<UserMessageEntity> findAllByUserId(double userId) {
        return userMessageRepository.findAllByUserId(userId);
    }
}
