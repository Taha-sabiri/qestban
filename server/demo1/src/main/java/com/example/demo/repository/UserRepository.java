package com.example.demo.repository;

import com.example.demo.dto.UserDto;
import com.example.demo.entity.UserEntity;
import jakarta.persistence.IdClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository

public interface UserRepository extends JpaRepository<UserEntity,Long> {

    @Query(value = "EXEC addNewUser :name ,:lastName,:ntnCode,:mobile,:password ", nativeQuery = true)
    UserEntity AddNewUser(@Param("name")String name , @Param("lastName")String lastName, @Param("ntnCode")String ntnCode, @Param("mobile")String mobile,@Param("password")String password);




}
