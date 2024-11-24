import CreditCardIcon from "@mui/icons-material/CreditCard";
import FolderIcon from "@mui/icons-material/Folder";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import { NavLink } from "react-router-dom";
import image from '../../assets/image/image.png';
import "./SideBar.css";
const Sidebar = () => {
  const handleLogout = () => {
    // Xóa token khỏi localStorage để đăng xuất
    localStorage.removeItem("token");
  };
  return (
    <div className="sidebar">
      {/* Logo */}
      

      {/* Navigation */}
      <ul>
        <li>
          <NavLink to="/home">
            <HomeIcon /> Trang chủ
          </NavLink>
        </li>
        <li>
          <NavLink to="/files">
            <FolderIcon /> Tài liệu của tôi
          </NavLink>
        </li>
        <li>
          <NavLink to="/payment">
            <CreditCardIcon /> Thanh toán
          </NavLink>
        </li>
        <li>
          <NavLink to="/support">
            <HeadsetMicIcon /> Hỗ trợ
          </NavLink>
        </li>
      </ul>
      {/* Notification box */}
      <div className="notification-box">
        <h3>Thông báo</h3>
        <div className="notification-item">
        <img src={image} alt="Notification icon 1" />
          
        </div>
        <div className="notification-item">
          <img src={image} alt="icon" />
         
        </div>
      </div>

      {/* Logout Button */}
      <button className="logout-button" onClick={handleLogout}>
        <NavLink to="/login" className="logout-link">
          <LogoutIcon /> Đăng xuất
        </NavLink>
      </button>
    </div>
  );
};

export default Sidebar;
