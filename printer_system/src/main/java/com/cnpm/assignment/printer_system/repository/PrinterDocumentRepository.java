package com.cnpm.assignment.printer_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cnpm.assignment.printer_system.entity.PrinterDocument;
import com.cnpm.assignment.printer_system.entity.id.PrinterDocumentId;
import com.cnpm.assignment.printer_system.repository.custom.PrinterDocumentRepositoryCustom;

public interface PrinterDocumentRepository extends JpaRepository<PrinterDocument, PrinterDocumentId>, PrinterDocumentRepositoryCustom {
}