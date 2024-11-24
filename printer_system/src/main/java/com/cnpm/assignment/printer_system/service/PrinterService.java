package com.cnpm.assignment.printer_system.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.cnpm.assignment.printer_system.response.PackagePrintResponse;

public interface PrinterService {
    public void printDocuments(Long idPrinter, List<Long> idDocuments);

    public Page<PackagePrintResponse> getPackagePrint(Integer pageNo, Integer pageSize);
}