package com.cnpm.assignment.printer_system.response;

import java.util.Date;

import com.cnpm.assignment.printer_system.enumeration.PrinterStatusSPSO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PrinterSPSOResponse {
    private Long id;
    private String address;
    private Date lastMaintenanceDate;
    private PrinterStatusSPSO status;
    private Long pageQuantity;
}