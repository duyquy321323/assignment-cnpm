package com.cnpm.assignment.printer_system.response;

import java.util.Date;

import com.cnpm.assignment.printer_system.enumeration.ContentStatus;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class QAndAResponse {
    private Long idQAndA;
    private String nameOfStudent;
    private Date dateQuestion;
    private String firstQuestion;
    private ContentStatus status;
}