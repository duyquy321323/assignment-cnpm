import { Avatar, Button } from "@mui/material";
import "./UserProfile.css";
import { useState, useEffect } from "react";

const UserProfile = () => {

    const [ userProfile, setUserProfile ] = useState([]);

    useEffect(() => {
        const fakedata = [
            { mmsv: 2210972, birth: "01/01/2024", email: "a.nguyenvan@hcmut.edu.vn", name: "Nguyễn Văn A", gender: "Nam", phone: "0123456789" },
        ];
        setUserProfile(fakedata);
    }, []);



    return (
        <div className="user-backgr">
            <div className="user-container">
                <div className="user-main">
                    <div className="user-wrapper">
                        <div className="user-text">
                            <span>Hồ Sơ Người Dùng</span>
                        </div>
                        <div className="user-infor">
                            <div className="button-change">
                                <button className="my-button-change">Change Avatar</button>
                            </div>
                            {userProfile.map(user => (
                                <div className="user-information">
                                <div className="user-avatar">
                                    <ul>Thông tin cá nhân</ul>
                                    
                                    <Avatar className="view-avatar-pro"
                                    src=""
                                    />
                                </div>
                                <div className="infor-left">
                                    <ul className="infor-pro">
                                        <span>Mã số sinh viên</span>
                                        <div className="pro-box">{user.mmsv}</div>
                                    </ul>

                                    <ul className="infor-pro">
                                        <span>Ngày sinh</span>
                                        <div className="pro-box">{user.birth}</div>
                                    </ul>

                                    <ul className="infor-pro">
                                        <span>Email sinh viên</span>
                                        <div className="pro-box">{user.email}</div>
                                    </ul>
                                </div>
                                <div className="infor-right">
                                <ul className="infor-pro">
                                        <span>Họ và tên</span>
                                        <div className="pro-box">{user.name}</div>
                                    </ul>

                                    <ul className="infor-pro">
                                        <span>Giới tính</span>
                                        <div className="pro-box">{user.gender}</div>
                                    </ul>

                                    <ul className="infor-pro">
                                        <span>Số điện thoại</span>
                                        <div className="pro-box">{user.phone}</div>
                                    </ul>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;