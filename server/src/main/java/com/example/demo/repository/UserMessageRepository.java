package com.example.demo.repository;

import com.example.demo.entity.UserMessageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserMessageRepository extends JpaRepository<UserMessageEntity,Long> {
    List<UserMessageEntity> findAllByUserId(double userId);

}
