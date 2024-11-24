package com.cnpm.assignment.printer_system.service;

import java.util.List;

import com.cnpm.assignment.printer_system.request.SearchPrinterSPSORequest;
import com.cnpm.assignment.printer_system.response.PrintHistoryResponse;
import com.cnpm.assignment.printer_system.response.PrinterSPSOResponse;
import com.cnpm.assignment.printer_system.response.QAndAResponse;
import com.cnpm.assignment.printer_system.response.StudentResponse;

public interface SPSOService {
    public List<PrinterSPSOResponse> getPrinter(SearchPrinterSPSORequest request, Integer pageNo, Integer pageSize);

    public List<StudentResponse> searchStudent(String fullName, Integer pageNo, Integer pageSize);

    public List<PrintHistoryResponse> getHistoryPrint(Long studentId, Integer pageNo, Integer pageSize);

    public void changeActive(Long studentId);

    public List<QAndAResponse> getHistoryQAndA(Integer pageNo, Integer pageSize);

    public void sendAnswer(Long idQAndA, String message);
}