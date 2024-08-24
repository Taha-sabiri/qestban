package com.example.demo.repository;

import com.example.demo.entity.UserEntity;
import com.example.demo.entity.UserLoginEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserLoginRepository extends JpaRepository<UserLoginEntity,Long> {
    @Query(value = "EXEC loginUser :mobile,:password ", nativeQuery = true)
    UserLoginEntity LoginUser(@Param("mobile")String mobile , @Param("password")String password);

}
