INSERT IGNORE INTO page(id, price, type) VALUES
(1, 1000, 'NORMAL'),
(2, 2000, 'COLOR');

INSERT IGNORE INTO printer(id, address, date_of_use, status_spso, status_student, timeout) VALUES
(1, "2/76/Ông Ích Khiêm", "2018-07-11 00:00:00.000000", "ACTIVE", "AVAILABILITY", 123456789),
(2, "21/19/ Trung tâm hành chính", "2020-12-05 00:00:00.000000", "CONNECT_FALED", "AVAILABILITY", 98765432),
(3, "137/48/Lê Minh Trường", "2024-12-26 00:00:00.000000", "ACTIVE", "AVAILABILITY", 5647382),
(4, "321/81/Đặng Huy Trứ", "2022-03-30 00:00:00.000000", "ACTIVE", "BUSY", 12341234);

INSERT IGNORE INTO print_package(id, name, page_quantity, id_page) VALUES
(1, "Gói in thường số 1", 20, 1),
(2, "Gói in thường số 2", 40, 1),
(3, "Gói in thường số 3", 100, 1),
(4, "Gói in màu số 1", 20, 2),
(5, "Gói in màu số 2", 40, 2),
(6, "Gói in màu số 3", 100, 2);

INSERT IGNORE INTO user(id, active, birthday, email, full_name, password, phone_number, sex) VALUES
(1, b'1', "2004-11-09", "quy.daoquy321323@hcmut.edu.vn", "Đào Duy Quý", "321323", "0373071643", "MALE"),
(2, b'1', "2004-11-09", "phuoc.phanhuu1111@hcmut.edu.vn", "Phan Hữu Phước", "1111", "0585045075", "MALE");

INSERT IGNORE INTO student(id, mssv) VALUES
(1, "2212864");

INSERT IGNORE INTO page_student(page_quantity, id_page, id_student) VALUES
(55, 1, 1),
(20, 2, 1);

INSERT IGNORE INTO page_printer(page_quantity, id_page, id_printer) VALUES
(2000, 1, 1),
(1000, 2, 1),
(2000, 1, 2),
(1000, 2, 2),
(2000, 1, 3),
(1000, 2, 3),
(2000, 1, 4),
(1000, 2, 4);