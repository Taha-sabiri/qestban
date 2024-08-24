package com.example.demo.service;


import com.example.demo.controller.mapper.CardMapper;
import com.example.demo.dto.CardDto;
import com.example.demo.entity.UserCardEntity;
import com.example.demo.repository.UserCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserCardService {

    @Autowired
    private UserCardRepository userCardRepository;

    public CardDto AddUserCardService(long userId ,
                                      String cardNumber,
                                      long isInstallment,
                                      String bankName,
                                      String startDate,
                                      long amount,
                                      long percentage,
                                      long count,
                                      long perInstallment){

        try {
            return CardMapper.toDto(userCardRepository.AddNewCard(userId,cardNumber,isInstallment,bankName,startDate,amount,percentage,count,perInstallment));
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    public List<UserCardEntity> getAllCardByUserId(long userId){
        try {
            return  userCardRepository.findAllByUserId(userId);
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

}
