package com.cnpm.assignment.printer_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cnpm.assignment.printer_system.entity.PageStudent;
import com.cnpm.assignment.printer_system.entity.id.PageStudentId;

public interface PageStudentRepository extends JpaRepository<PageStudent, PageStudentId> {
    
}