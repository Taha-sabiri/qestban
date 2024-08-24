package com.example.demo.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Optional;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    private Long userId;

    private String name;

    private String lastName;

    private String ntnCode;

    private String mobileNumber;

    private String token;


}
