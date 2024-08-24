package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Objects;

@Entity
@Table(name = "User_card", schema = "dbo", catalog = "qesdbandb")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserCardEntity {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    private long id;
    @Basic
    @Column(name = "userid", nullable = false)
    private long userId;
    @Basic
    @Column(name = "cardnumber", nullable = true, length = 50)
    private String cardNumber;
    @Basic
    @Column(name = "isinstallment", nullable = true, length = 50)
    private Long isInstallment;
    @Basic
    @Column(name = "bankname", nullable = true, length = 50)
    private String bankName;
    @Basic
    @Column(name = "startdate", nullable = true, length = 50)
    private String startDate;
    @Basic
    @Column(name = "amount", nullable = true)
    private Long amount;
    @Basic
    @Column(name = "percentage", nullable = true)
    private Long percentage;
    @Basic
    @Column(name = "count", nullable = true)
    private Long count;
    @Basic
    @Column(name = "perinstallment", nullable = true)
    private Long perInstallment;

}
