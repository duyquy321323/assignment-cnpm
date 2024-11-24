package com.cnpm.assignment.printer_system.response;

import java.util.Date;

import com.cnpm.assignment.printer_system.enumeration.Sex;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Dữ liệu trả về sau khi người dùng yêu cầu lấy thông tin cá nhân")
public class InformationResponse {
    @Schema(description = "Mã số sinh viên nếu người dùng là Student", example = "2212864")
    private String mssv; // Nếu người dùng không phải là sinh viên thì trường này rỗng
    @Schema(example = "Nguyễn Văn A")
    private String fullName;
    @Schema(example = "2024-11-24T15:30:00.000+00:00")
    private Date birthday;
    @Schema(example = "MALE")
    private Sex sex;
    @Schema(example = "abc.xyz@gmail.com")
    private String email;
    @Schema(example = "0373071644")
    private String phoneNumber;
    @Schema(example = "abcaibsjiab8932y78fb")
    private byte[] avatar;
}