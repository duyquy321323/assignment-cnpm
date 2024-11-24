package com.cnpm.assignment.printer_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cnpm.assignment.printer_system.entity.QAndA;

public interface QAndARepository extends JpaRepository<QAndA, Long> {
    
}