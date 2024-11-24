package com.cnpm.assignment.printer_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cnpm.assignment.printer_system.entity.Document;

public interface DocumentRepository extends JpaRepository<Document, Long> {
    
}