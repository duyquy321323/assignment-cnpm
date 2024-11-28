package com.cnpm.assignment.printer_system.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.cnpm.assignment.printer_system.response.PackagePrintResponse;
import com.cnpm.assignment.printer_system.service.PrinterService;

@Service
@Transactional
public class PrinterServiceImpl implements PrinterService {

    /**
     * Hàm để thêm các tài liệu yêu cầu in vào database (PrinterDocument)
     * B1: Lấy Printer từ database bằng idPrinter
     * B2: Lấy các Document từ database bằng danh sách idDocuments
     * B3: Lưu vào bảng PrinterDocument
     */
    @Override
    public void printDocuments(Long idPrinter, List<Long> idDocuments) {
        // TODO
        Printer printer = printerRepository.findById(idPrinter).get();

        Document document = documentRepository.findById(idDocuments.get(0)).get();

        for (Long idDocument : idDocuments) {
            PrinterDocument printerDocument = new PrinterDocument();
            printerDocument.setPrinter(printer);
            printerDocument.setDocument(document);
            printerDocument.setPrintDate(LocalDateTime.now());
            printerDocument.setStatus(DocumentStatus.PENDING);
            printerDocumentRepository.save(printerDocument);
        }
    }

    /**
     * Hàm để lấy hết tất cả các gói in ra để hiện lên màn hình cho học sinh chọn
     * mua
     * 
     * Lấy các đối tượng PrintPackage từ database và chuyển thành danh sách
     * PackagePrintResponse -> trả về
     */
    @Override
    public Page<PackagePrintResponse> getPackagePrint(Integer pageNo, Integer pageSize) {
        // TODO
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        
        Page<PrintPackage> printPackages = printPackageRepository.findAll(pageable);
        
        printPackages.map(printPackage -> {
            PackagePrintResponse packagePrintResponse = new PackagePrintResponse();
            packagePrintResponse.setId(printPackage.getId());
            packagePrintResponse.setName(printPackage.getName());
            packagePrintResponse.setPrice(printPackage.getPrice());
            packagePrintResponse.setQuantity(printPackage.getQuantity());
            packagePrintResponse.setTotalPage(printPackage.getTotalPage());
            packagePrintResponse.setTotalPrint(printPackage.getTotalPrint());
            return packagePrintResponse;
        });
    }

}