package com.cnpm.assignment.printer_system.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.cnpm.assignment.printer_system.enumeration.BillStatus;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date_payment")
    private Date datePayment;

    @Column(name = "total_price", nullable = false)
    private Long totalPrice;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private BillStatus status;

    @OneToMany(mappedBy = "id.bill", cascade = { CascadeType.PERSIST, CascadeType.MERGE }, orphanRemoval = true)
    private List<BillPrintPackage> billPrintPackages = new ArrayList<>();
}