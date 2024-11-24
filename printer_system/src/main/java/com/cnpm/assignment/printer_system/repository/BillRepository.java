package com.cnpm.assignment.printer_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cnpm.assignment.printer_system.entity.Bill;

public interface BillRepository extends JpaRepository<Bill, Long> {
    
}