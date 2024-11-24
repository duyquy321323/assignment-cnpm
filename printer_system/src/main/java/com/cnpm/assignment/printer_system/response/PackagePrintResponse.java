package com.cnpm.assignment.printer_system.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PackagePrintResponse {
    private Long idPackagePrint;
    private String namePackage;
    private Long quantityPage; // tổng tất cả số trang của các loại page trong gói
    private Long singlePricePackage;
    private Long totalPricePackage;
}