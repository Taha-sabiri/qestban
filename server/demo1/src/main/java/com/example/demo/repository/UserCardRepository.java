package com.example.demo.repository;

import com.example.demo.entity.UserCardEntity;
import com.example.demo.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserCardRepository  extends JpaRepository<UserCardEntity,Long> {

        @Query(value = "EXEC [dbo].[AddCard] :userId ,:cardNumber , :isInstallment ,:bankName ,:startDate,:amount,:percentage ,:count ,:perInstallment", nativeQuery = true)
        UserCardEntity AddNewCard(@Param("userId")long userId ,
                                  @Param("cardNumber")String cardNumber,
                                  @Param("isInstallment")long isInstallment,
                                  @Param("bankName")String bankName,
                                  @Param("startDate")String startDate,
                                  @Param("amount")long amount,
                                  @Param("percentage")long percentage,
                                  @Param("count")long count,
                                  @Param("perInstallment")long perInstallment
        );

        List<UserCardEntity> findAllByUserId(long userId);
}
