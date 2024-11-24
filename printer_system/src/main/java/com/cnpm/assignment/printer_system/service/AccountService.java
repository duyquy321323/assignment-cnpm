package com.cnpm.assignment.printer_system.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.cnpm.assignment.printer_system.response.ContentResponse;
import com.cnpm.assignment.printer_system.response.InformationResponse;
import com.cnpm.assignment.printer_system.response.LoginResponse;

public interface AccountService {
    public LoginResponse login(String email, String password);

    public void updateAvatar(MultipartFile avatar);

    public InformationResponse getInformation();

    public List<ContentResponse> getDetailQAndA(Long idQAndA);
}