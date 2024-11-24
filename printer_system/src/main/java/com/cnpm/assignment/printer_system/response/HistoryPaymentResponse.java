package com.cnpm.assignment.printer_system.response;

import java.util.Date;

import com.cnpm.assignment.printer_system.enumeration.BillStatus;

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
public class HistoryPaymentResponse {
    private Long idBill;
    private String type; // loại giao dịch hiện tại chỉ có "Thanh toán tài liệu"
    private Long pageQuantity;
    private Long totalPrice;
    private Date datePayment;
    private BillStatus statusPayment;
}