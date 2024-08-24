package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Objects;

@Entity
@Table(name = "User_message", schema = "dbo", catalog = "qesdbanDb")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserMessageEntity {
    @Basic
    @Column(name = "id", nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Basic
    @Column(name = "userid", nullable = false)
    private long userId;
    @Basic
    @Column(name = "message", nullable = true, length = 2147483647)
    private String message;

    @Column(name = "title", nullable = true, length = 2147483647)
    private String title;
    @Basic
    @Column(name = "date", nullable = true, length = 50)
    private String date;

    @Column(name = "type", nullable = false, length = 50)
    private long type;

}
