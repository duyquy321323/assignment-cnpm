package com.cnpm.assignment.printer_system.response;

import java.util.Date;
import java.util.List;

import com.cnpm.assignment.printer_system.enumeration.PrinterStatusStudent;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PrinterStudentResponse {
    private Long id;
    private String address;
    private Date dateOfUse;
    private Long timeout;
    private List<String> historyUse; // danh sách tên file đã được in bằng máy in này của người dùng hiện tại
    private PrinterStatusStudent status;
}