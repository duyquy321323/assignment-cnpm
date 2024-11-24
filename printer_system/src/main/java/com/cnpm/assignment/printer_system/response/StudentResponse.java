package com.cnpm.assignment.printer_system.response;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StudentResponse {
    private Long id;
    private String fullName;
    private String email;
    private Date lastAccessedDate;
    private String mssv;
    private Date birthday;
    private String phoneNumber;
    private Boolean active;
}