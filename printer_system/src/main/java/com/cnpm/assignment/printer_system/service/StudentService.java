package com.cnpm.assignment.printer_system.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.cnpm.assignment.printer_system.request.PayPackagePrintRequest;
import com.cnpm.assignment.printer_system.request.SearchPrinterStudentRequest;
import com.cnpm.assignment.printer_system.response.DetailBillResponse;
import com.cnpm.assignment.printer_system.response.DocumentResponse;
import com.cnpm.assignment.printer_system.response.HistoryPaymentResponse;
import com.cnpm.assignment.printer_system.response.PageResponse;
import com.cnpm.assignment.printer_system.response.PrinterStudentResponse;

public interface StudentService {
    public List<DocumentResponse> getUploadedDocument(Integer pageNo, Integer pageSize);

    public void uploadDocument(List<MultipartFile> documents);

    public List<PrinterStudentResponse> getPrinterActive(SearchPrinterStudentRequest request, Integer pageNo,
            Integer pageSize);

    public List<PageResponse> getPageNow();

    public List<HistoryPaymentResponse> getHistoryPayments(Integer pageNo, Integer pageSize);

    public void payPackagePrints(List<PayPackagePrintRequest> packages);

    public List<DetailBillResponse> getDetailBills(Integer pageNo, Integer pageSize);

    public void createQuestion(Long idQAndA, String message);

    public void deleteUploadedDocument(Long idDocument);
}