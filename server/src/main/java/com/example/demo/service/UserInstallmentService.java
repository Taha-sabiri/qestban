package com.example.demo.service;

import com.example.demo.entity.UserInstallmentsEntity;
import com.example.demo.repository.UserInstallmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserInstallmentService {

    @Autowired
    private UserInstallmentRepository userInstallmentRepository;

    public List<UserInstallmentsEntity> getAll(int userId , int cardId){
        if (cardId == 0) {
            return userInstallmentRepository.findAllByUserId(userId) ;
        }else
        return userInstallmentRepository.findAllByUserIdAndCardId(userId , cardId) ;
    }

    public void UpdateIsPayedService( Long id ,Long cardId,Long userId ){
         userInstallmentRepository.UpdateIsPayed(id, cardId, userId); ;
    }
}
