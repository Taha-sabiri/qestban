package com.example.demo.dto;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class CardDto {

    private long userId;

    private String cardNumber;

    private long isInstallment;

    private String bankName;


    private String startDate;

    private Long amount;

    private Long percentage;

    private Long count;

    private Long perInstallment;
}
