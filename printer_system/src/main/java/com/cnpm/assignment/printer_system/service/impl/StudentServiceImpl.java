package com.cnpm.assignment.printer_system.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cnpm.assignment.printer_system.request.PayPackagePrintRequest;
import com.cnpm.assignment.printer_system.request.SearchPrinterStudentRequest;
import com.cnpm.assignment.printer_system.response.DetailBillResponse;
import com.cnpm.assignment.printer_system.response.DocumentResponse;
import com.cnpm.assignment.printer_system.response.HistoryPaymentResponse;
import com.cnpm.assignment.printer_system.response.PageResponse;
import com.cnpm.assignment.printer_system.response.PrinterStudentResponse;
import com.cnpm.assignment.printer_system.service.StudentService;

@Service
@Transactional
public class StudentServiceImpl implements StudentService {

    /**
     * Hàm để lấy tất cả các tài liệu (DocumentResponse) mà sinh viên đã upload lên
     * web
     * 
     * ! Phải phân trang dựa trên 2 thuộc tính:
     * ->pageNo: Trang thứ ...
     * ->pageSize: kích cỡ trang
     * 
     * B1: lấy user đang gửi request ra bằng Authentication và SecurityContextHolder
     * từ database (User) ra
     * -> nếu không tồn tại thì throw ra CNPMNotFoundException("Tài khoản không tồn
     * tại!")
     * !bằng email không phải username
     * B2: lấy các document đã upload của người dùng vừa request ra từ database
     * (entity Document)
     * B3: đối các đối tượng Document vừa lấy ra sang các đối tượng DocumentResponse
     * và trả về
     */
    @Override
    public List<DocumentResponse> getUploadedDocument(Integer pageNo, Integer pageSize) {
        // TODO
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        return null;
    }

    /**
     * Hàm để upload các tài liệu lên database (Document) mà sinh viên hiện tại đang
     * request
     * B1: lấy user đang gửi request ra bằng Authentication và SecurityContextHolder
     * từ database (User) ra
     * -> nếu không tồn tại thì throw ra CNPMNotFoundException("Tài khoản không tồn
     * tại!")
     * !bằng email không phải username
     * B2: đổi các MultipartFile sang Document và lưu vào database
     */
    @Override
    public void uploadDocument(List<MultipartFile> documents) {
        // TODO
    }

    /**
     * Hàm để tìm kiếm các máy in(Printer) đang còn hoạt động (ACTIVE:
     * PrinterStatusSPSO)
     * bằng các thuộc tính: address, statusStudent (trạng thái của máy in đối với
     * góc nhìn của học viên), id
     * -> Nếu không tìm thấy thì trả về list rỗng
     * -> Có thể tìm 1 hoặc 2 hoặc bằng cả 3 thuộc tính trên
     * -> Nếu cả 3 thuộc tính trên đều null hoặc rỗng thì trả về tất cả máy in đang
     * ACTIVE
     * 
     * ! Phải phân trang dựa trên 2 thuộc tính:
     * ->pageNo: Trang thứ ...
     * ->pageSize: kích cỡ trang (ví dụ 5 thì là trang có 5 đối tượng
     * PrinterStudentResponse trả về )
     * 
     * Nếu cần dùng đến thông tin người dùng hiện tại đang yêu cầu lấy máy in thì:
     * Lấy user đang gửi request ra bằng Authentication và SecurityContextHolder từ
     * database (User) ra
     * -> nếu không tồn tại thì throw ra CNPMNotFoundException("Tài khoản không tồn
     * tại!")
     * !bằng email không phải username
     */
    @Override
    public List<PrinterStudentResponse> getPrinterActive(SearchPrinterStudentRequest request, Integer pageNo,
            Integer pageSize) {
        // TODO
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        return null;
    }

    /**
     * Hàm lấy các trang còn lại của học viện hiện tại bao gồm các loại trang như
     * (Trang màu, trang thường, ...thêm nếu có loại trang mới)
     * 
     * Lấy các Page (bao gồm số lượng) của học viên ra từ database -> chuyển từ các
     * đối tượng Page sang PageResponse và gom lại thành danh sách -> trả về
     * 
     * Nếu cần dùng đến thông tin người dùng hiện tại đang yêu cầu lấy máy in thì:
     * Lấy user đang gửi request ra bằng Authentication và SecurityContextHolder từ
     * database (User) ra
     * -> nếu không tồn tại thì throw ra CNPMNotFoundException("Tài khoản không tồn
     * tại!")
     * !bằng email không phải username
     */
    @Override
    public List<PageResponse> getPageNow() {
        // TODO
        return null;
    }

    /**
     * Hàm lấy danh sách các bill của học viên hiện tại
     * Lấy các Bill của học viên hiện tại ra rồi đổi sang
     * List<HistoryPaymentResponse> để trả về
     * 
     * ! Phải phân trang dựa trên 2 thuộc tính:
     * ->pageNo: Trang thứ ...
     * ->pageSize: kích cỡ trang
     * 
     * Nếu cần dùng đến thông tin người dùng hiện tại đang yêu cầu lấy máy in thì:
     * Lấy user đang gửi request ra bằng Authentication và SecurityContextHolder từ
     * database (User) ra
     * -> nếu không tồn tại thì throw ra CNPMNotFoundException("Tài khoản không tồn
     * tại!")
     * !bằng email không phải username
     */
    @Override
    public List<HistoryPaymentResponse> getHistoryPayments(Integer pageNo, Integer pageSize) {
        // TODO
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        return null;
    }

    /**
     * Hàm dùng để thanh toán các package cho học viên
     * 
     * Khi học viên gửi đến các package cần mua thì hệ thống sẽ chuyển các package +
     * số lượng mỗi package đó vào 1 bill mới
     * -> Lưu Bill (Đang xử lý) đó lại vào database và chờ admin xử lý
     * 
     * Nếu cần dùng đến thông tin người dùng hiện tại đang yêu cầu lấy máy in thì:
     * Lấy user đang gửi request ra bằng Authentication và SecurityContextHolder từ
     * database (User) ra
     * -> nếu không tồn tại thì throw ra CNPMNotFoundException("Tài khoản không tồn
     * tại!")
     * !bằng email không phải username
     */
    @Override
    public void payPackagePrints(List<PayPackagePrintRequest> packages) {
        // TODO
    }

    /**
     * Hàm này dùng để lấy danh sách chi tiết của các bill ra
     * 
     * Trả về danh sách DetailBillResponse
     * 
     * ! Phải phân trang dựa trên 2 thuộc tính:
     * ->pageNo: Trang thứ ...
     * ->pageSize: kích cỡ trang
     * 
     * Nếu cần dùng đến thông tin người dùng hiện tại đang yêu cầu lấy máy in thì:
     * Lấy user đang gửi request ra bằng Authentication và SecurityContextHolder từ
     * database (User) ra
     * -> nếu không tồn tại thì throw ra CNPMNotFoundException("Tài khoản không tồn
     * tại!")
     * !bằng email không phải username
     */
    @Override
    public List<DetailBillResponse> getDetailBills(Integer pageNo, Integer pageSize) {
        // TODO
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        return null;
    }

    /**
     * Hàm gửi câu hỏi của học viên cho spso
     * 
     * Nếu idQAndA = null thì tạo chủ đề mới
     * Sau đó tạo câu hỏi trong QAndA mới đó
     * 
     * Còn nếu không null thì tạo câu hỏi mới trong QAndA đó
     */
    @Override
    public void createQuestion(Long idQAndA, String message) {
        // TODO
    }

    /**
     * Hàm xóa document của học viên theo id của Document
     * 
     * !Lưu ý: Xóa ở đây là chỉ chỉnh active của document đó về false chứ không được
     * xóa
     * trong database
     */
    @Override
    public void deleteUploadedDocument(Long idDocument) {
        // TODO
    }
}