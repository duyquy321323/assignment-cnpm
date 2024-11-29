import React from "react";
import NavBar from "../navbar";
import SideBarAdmin from "./SideBarAdmin";
import PrinterManagement from "./PrinterManagement";
import UserManagement from "./UserManagement";

const Admin = () => {
  return (
    <>
      <NavBar />
      <SideBarAdmin />
      {/* Routes tới 2 cái ở dưới */}
      <PrinterManagement />
      {/* <UserManagement /> */}
    </>
  );
};

export default Admin;
