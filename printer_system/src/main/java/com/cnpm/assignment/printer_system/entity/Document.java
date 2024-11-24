package com.cnpm.assignment.printer_system.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

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
@Entity
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "file_byte", columnDefinition = "LONGBLOB", nullable = false)
    private byte[] fileByte;

    @Column(name = "post_date", nullable = false)
    private Date postDate;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Long size;

    @Column(nullable = false)
    private Boolean active;

    @ManyToOne
    @JoinColumn(name = "id_student", nullable = false)
    private Student student;

    @OneToMany(mappedBy = "id.document", cascade = { CascadeType.PERSIST, CascadeType.MERGE }, orphanRemoval = true)
    private List<PageDocument> pageDocuments = new ArrayList<>();

    @OneToMany(mappedBy = "id.document", cascade = { CascadeType.PERSIST, CascadeType.MERGE }, orphanRemoval = true)
    private List<PrinterDocument> printerDocuments = new ArrayList<>();
}