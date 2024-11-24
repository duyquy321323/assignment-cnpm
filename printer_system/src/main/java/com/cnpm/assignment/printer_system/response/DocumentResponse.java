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
@AllArgsConstructor
@NoArgsConstructor
public class DocumentResponse {
    private Long id;
    private String filename;
    private Long size;
    private Date postDate;
}