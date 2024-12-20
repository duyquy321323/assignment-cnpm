package com.cnpm.assignment.printer_system.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class ConnectConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(@SuppressWarnings("null") CorsRegistry registry) {
        registry.addMapping("/**") // Áp dụng cho tất cả các endpoint
                .allowedOrigins("https://duyquy321323.github.io", "http://localhost:3000") // Chỉ định domain được phép truy cập
                                                         // (thay bằng domain của
                // bạn)
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Chỉ định các phương thức được phép
                .allowedHeaders("*") // Cho phép tất cả các header
                .allowCredentials(true); // Cho phép gửi thông tin xác thực (cookie)
    }
}