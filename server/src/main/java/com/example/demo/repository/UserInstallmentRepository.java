package com.example.demo.repository;

import com.example.demo.entity.UserCardEntity;
import com.example.demo.entity.UserInstallmentsEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserInstallmentRepository extends JpaRepository<UserInstallmentsEntity,Long> {

    List<UserInstallmentsEntity> findAllByUserIdAndCardId(int userId , int cardId);
    List<UserInstallmentsEntity> findAllByUserId(int userId);
    @Modifying
    @Transactional
    @Query("UPDATE UserInstallmentsEntity c SET c.isPayed = CASE WHEN c.isPayed = 1 THEN 0 ELSE 1 END WHERE c.id=:id AND c.cardId=:cardId AND c.userId=:userId")
    void UpdateIsPayed  (@Param("id") Long id ,@Param("cardId") Long cardId,@Param("userId") Long userId);

}
