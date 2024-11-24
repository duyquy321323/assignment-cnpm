package com.cnpm.assignment.printer_system.response;

import java.util.Date;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PrintHistoryResponse {
    private Long idPrinter;
    private Date datePrint;
    private String address;
    private String nameDocument;
    private List<PageResponse> pageResponses;
}