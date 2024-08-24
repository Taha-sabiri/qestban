package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonRootName;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Objects;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class UserLoginEntity {
     @Id
    @Column(name = "id")
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "lastname", nullable = true, length = 50)
    private String lastName;
    @Basic
    @Column(name = "ntncode", nullable = true, length = 50)
    private String ntnCode;
    @Basic
    @Column(name = "mobilenumber", nullable = true, length = 50)
    private String mobileNumber;

    @Basic
    @Column(name = "password", nullable = false, length = 50)
    private String password;

    @Basic
    @Column(name = "token")
    private String token;

}