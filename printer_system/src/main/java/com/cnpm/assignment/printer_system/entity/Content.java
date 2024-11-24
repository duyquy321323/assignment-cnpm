package com.cnpm.assignment.printer_system.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.cnpm.assignment.printer_system.entity.id.ContentId;
import com.cnpm.assignment.printer_system.enumeration.ContentStatus;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Builder
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Content {
    @EmbeddedId
    private ContentId id;

    @Column(nullable = false)
    private String question;

    @Column(nullable = false, name = "date_question")
    private Date dateQuestion;

    private String answer;

    @Column(name = "date_answer")
    private Date dateAnswer;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ContentStatus status;
}