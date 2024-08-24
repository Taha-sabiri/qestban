package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Objects;

@Entity
@Table(name = "User_Installments", schema = "dbo", catalog = "qesdbanDb")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserInstallmentsEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    private long id;
    @Basic
    @Column(name = "userid", nullable = false)
    private long userId;
    @Basic
    @Column(name = "cardid", nullable = false)
    private long cardId;
    @Basic
    @Column(name = "monthlypayment", nullable = true)
    private Long monthlyPayment;
    @Basic
    @Column(name = "ispayed", nullable = true)
    private Long isPayed;
    @Basic
    @Column(name = "date", nullable = true)
    private Long date;

    @Column(name = "monthname", nullable = true )
    private String monthName;


}
