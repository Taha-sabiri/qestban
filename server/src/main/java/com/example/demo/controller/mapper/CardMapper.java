package com.example.demo.controller.mapper;

import com.example.demo.dto.CardDto;
import com.example.demo.dto.UserDto;
import com.example.demo.entity.UserCardEntity;
import com.example.demo.entity.UserEntity;

public class CardMapper {
    public static CardDto toDto(UserCardEntity userCardEntity) {
        CardDto dto = new CardDto();

        dto.setUserId(userCardEntity.getUserId());
        dto.setCardNumber(userCardEntity.getCardNumber());
        dto.setBankName(userCardEntity.getBankName());
        dto.setCount(userCardEntity.getCount());
        dto.setAmount(userCardEntity.getAmount());
        dto.setPercentage(userCardEntity.getPercentage());
        dto.setPerInstallment(userCardEntity.getPerInstallment());
        dto.setStartDate(userCardEntity.getStartDate());

        return dto;
    }
}
