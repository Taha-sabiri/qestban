package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonRootName;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Objects;

@Entity
@Table(name = "user", schema = "dbo", catalog = "qesdbanDb")

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    private long id;
    @Basic
    @Column(name = "name", nullable = true, length = 50)
    private String name;
    @Basic
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

    @Transient
    private String token;

}
