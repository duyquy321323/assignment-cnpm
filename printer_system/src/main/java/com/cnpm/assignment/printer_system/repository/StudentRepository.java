package com.cnpm.assignment.printer_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cnpm.assignment.printer_system.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
    
}