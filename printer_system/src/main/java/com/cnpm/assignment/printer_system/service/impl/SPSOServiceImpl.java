package com.cnpm.assignment.printer_system.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.cnpm.assignment.printer_system.request.SearchPrinterSPSORequest;
import com.cnpm.assignment.printer_system.response.PrintHistoryResponse;
import com.cnpm.assignment.printer_system.response.PrinterSPSOResponse;
import com.cnpm.assignment.printer_system.response.QAndAResponse;
import com.cnpm.assignment.printer_system.response.StudentResponse;
import com.cnpm.assignment.printer_system.service.SPSOService;

@Service
@Transactional
public class SPSOServiceImpl implements SPSOService {

    /**
     * Hàm để tìm kiếm các máy in(Printer)
     * bằng các thuộc tính: address, statusSPSO (trạng thái của máy in đối với
     * góc nhìn của SPSO), id
     * -> Nếu không tìm thấy thì trả về list rỗng
     * -> Có thể tìm 1 hoặc 2 hoặc bằng cả 3 thuộc tính trên
     * -> Nếu cả 3 thuộc tính trên đều null hoặc rỗng thì trả về tất cả máy in
     * 
     * ! Phải phân trang dựa trên 2 thuộc tính:
     * ->pageNo: Trang thứ ...
     * ->pageSize: kích cỡ trang (ví dụ 5 thì là trang có 5 đối tượng
     * PrinterSPSOResponse trả về )
     * 
     * Nếu cần dùng đến thông tin người dùng hiện tại đang yêu cầu lấy máy in thì:
     * Lấy user đang gửi request ra bằng Authentication và SecurityContextHolder từ
     * database (User) ra
     * -> nếu không tồn tại thì throw ra CNPMNotFoundException("Tài khoản không tồn
     * tại!")
     * !bằng email không phải username
     */
    @Override
    public Page<PrinterSPSOResponse> getPrinter(SearchPrinterSPSORequest request, Integer pageNo, Integer pageSize) {
        // TODO
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        return null;
    }

    /**
     * Hàm để tìm kiếm các học sinh (Student) bằng tên
     * -> Nếu không tìm thấy thì trả về list rỗng
     * -> Nếu tên cần tìm là null hoặc rỗng thì trả về tất cả học viên
     * 
     * ! Phải phân trang dựa trên 2 thuộc tính:
     * ->pageNo: Trang thứ ...
     * ->pageSize: kích cỡ trang (ví dụ 5 thì là trang có 5 đối tượng
     * StudentResponse trả về )
     * 
     * Nếu cần dùng đến thông tin người dùng hiện tại đang yêu cầu lấy máy in thì:
     * Lấy user đang gửi request ra bằng Authentication và SecurityContextHolder từ
     * database (User) ra
     * -> nếu không tồn tại thì throw ra CNPMNotFoundException("Tài khoản không tồn
     * tại!")
     * !bằng email không phải username
     */
    @Override
    public Page<StudentResponse> searchStudent(String fullName, Integer pageNo, Integer pageSize) {
        // TODO
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        return null;
    }

    /**
     * Hàm để lấy danh sách lịch sử in ấn của sinh viên theo id sinh viên
     * 
     * 
     * Trả về danh sách các lần in ấn của sinh viên (PrintHistoryResponse)
     * 
     * Nếu cần dùng đến thông tin người dùng hiện tại đang yêu cầu lấy máy in thì:
     * Lấy user đang gửi request ra bằng Authentication và SecurityContextHolder từ
     * database (User) ra
     * -> nếu không tồn tại thì throw ra CNPMNotFoundException("Tài khoản không tồn
     * tại!")
     * !bằng email không phải username
     */
    @Override
    public Page<PrintHistoryResponse> getHistoryPrint(Long studentId, Integer pageNo, Integer pageSize) {
        // TODO
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        return null;
    }

    /**
     * Hàm để đổi trạng thái tài khoản của học sinh, ví dụ:
     * tài khoản đang hoạt động thì sẽ khóa tài khoản đi, và ngược lại.
     */
    @Override
    public void changeActive(Long studentId) {
        // TODO
    }

    /**
     * Hàm lấy ra danh sách tất cả các câu hỏi chưa trả lời và đã trả lời
     * 
     * Trả về List<QAndAResponse>
     * 
     * ! Phải phân trang dựa trên 2 thuộc tính:
     * ->pageNo: Trang thứ ...
     * ->pageSize: kích cỡ trang
     */
    @Override
    public Page<QAndAResponse> getHistoryQAndA(Integer pageNo, Integer pageSize) {
        // TODO
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        return null;
    }

    /**
     * Hàm gửi câu trả lời của spso cho học viên
     * 
     * Câu trả lời được gắn với câu hỏi mới nhất trong chủ đề
     */
    @Override
    public void sendAnswer(Long idQAndA, String message) {
        // TODO
    }
}