package com.cnpm.assignment.printer_system.service.impl;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.cnpm.assignment.printer_system.entity.User;
import com.cnpm.assignment.printer_system.exception.custom.CNPMNotFoundException;
import com.cnpm.assignment.printer_system.exception.custom.PasswordNotMatchException;
import com.cnpm.assignment.printer_system.repository.UserRepository;
import com.cnpm.assignment.printer_system.response.ContentResponse;
import com.cnpm.assignment.printer_system.response.InformationResponse;
import com.cnpm.assignment.printer_system.response.LoginResponse;
import com.cnpm.assignment.printer_system.service.AccountService;
import com.cnpm.assignment.printer_system.service.JwtToken;

@Service
@Transactional
public class AccountServiceImpl implements AccountService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtToken jwtToken;

    @Autowired
    private Cloudinary cloudinary;

    /**
     * Hàm đăng nhập
     * Kiểm tra email có tồn tại không: nếu có thì kiểm tra password có đúng không
     * -> Đúng password thì tạo token cho user đó và trả về đối tượng LoginResponse
     * của User
     * -> Sai password thì throw ra exception PasswordNotMatchException("Mật khẩu
     * không chính xác!")
     * -> Sai email thì throw ra exception CNPMNotFoundException("Tài khoản không
     * tồn tại!")
     */
    @Override
    public LoginResponse login(String email, String password) {
        // TODO
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new CNPMNotFoundException("Tài khoản không tồn tại!"));
        if (!user.getPassword().equals(password)) {
            throw new PasswordNotMatchException("Mật khẩu không chính xác!");
        }
        UserDetails userDetails = userDetailsService.loadUserByUsername(email);
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                email, password, userDetails.getAuthorities());
        Authentication authentication = authenticationManager.authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtToken.generateToken(user); // tạo token cho User;
        return LoginResponse.builder().avatar(user.getUrlAvatar()).fullName(user.getFullName()).id(user.getId())
                .token(token).expiryTime(jwtToken.extractExpirationToken(token).getTime()).build();
    }

    /**
     * Hàm này để cập nhật avatar của người dùng hiện tại
     * 
     * Lấy user đang gửi request ra bằng Authentication và SecurityContextHolder từ
     * database (User) ra
     * -> nếu không tồn tại thì throw ra CNPMNotFoundException("Tài khoản không tồn
     * tại!")
     * !bằng email không phải username
     * 
     * @throws IOException
     */
    @Override
    public void updateAvatar(MultipartFile avatar) throws IOException {
        // TODO
        Map uploadResult = cloudinary.uploader().upload(avatar.getBytes(), ObjectUtils.asMap("resource_type", "raw")); //tải file kiểu khác không phải hình ảnh
        System.out.println((String) uploadResult.get("url"));
    }

    /**
     * Hàm này để lấy thông tin của người dùng hiện tại
     * Trả về đối tượng InformationResponse
     * 
     * Lấy user đang gửi Auto-generated method stub
     * throw new UnsupportedOperationException("Unimplemented method
     * 'deleteUploadedDocument'");request ra bằng Authentication và
     * SecurityContextHolder từ
     * database (User) ra
     * -> nếu không tồn tại thì throw ra CNPMNotFoundException("Tài khoản không tồn
     * tại!")
     * !bằng email không phải username
     */
    @Override
    public InformationResponse getInformation() {
        // TODO
        return null;
    }

    /**
     * Hàm này để lấy các cặp câu hỏi + trả lời của 1 chủ đề ra bằng id của chủ để
     * đó
     * 
     * Trả về danh sách ContentResponse
     */
    @Override
    public List<ContentResponse> getDetailQAndA(Long idQAndA) {
        // TODO
        return null;
    }
}