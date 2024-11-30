import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";
import image from "../../../assets/image/image.png";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import "../../sidebar/SideBar.css";

const SideBarAdmin = () => {
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
          <NavLink to="/profile">
            <FolderIcon /> Hồ sơ
          </NavLink>
        </li>
        <li>
          <NavLink to="/manage-printer">
            <Inventory2Icon /> Quản lý máy in
          </NavLink>
        </li>
        <li>
          <NavLink to="/manage-student">
            <ManageAccountsIcon /> Quản lý sinh viên
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

export default SideBarAdmin;
