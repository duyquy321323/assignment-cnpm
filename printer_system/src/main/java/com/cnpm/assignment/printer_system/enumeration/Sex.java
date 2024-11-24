package com.cnpm.assignment.printer_system.enumeration;

public enum Sex {
    MALE("Nam"),
    FEMALE("Nữ"),
    OTHER("Khác")
;

private final String value;

Sex(String value) {
    this.value = value;
}
}