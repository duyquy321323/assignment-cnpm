package com.cnpm.assignment.printer_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cnpm.assignment.printer_system.entity.BillPrintPackage;
import com.cnpm.assignment.printer_system.entity.id.BillPrintPackageId;

public interface BillPrintPackageRepository extends JpaRepository<BillPrintPackage, BillPrintPackageId> {
    
}