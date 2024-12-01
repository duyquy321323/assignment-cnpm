import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from "./components/dashboard/index";
import PrintDocument from './components/documentsfile-forstudent/chooseprint/PrintDocument';
import EditDocument from "./components/documentsfile-forstudent/editdocument";
import Documents from "./components/documentsfile-forstudent/index";
import Login from "./components/login/login";
import NavBar from "./components/navbar/index";
import SideBar from "./components/sidebar/index";
import UserProfile from './components/userprofile/UserProfile';
import ViewPaymentHistory from './components/viewpayment/ViewPaymentHistory';
import PrintingHistory from './components/PrintingHistory/PrintingHistory';

// Hàm kiểm tra trạng thái đăng nhập
const isAuthenticated = () => {
  // Kiểm tra trạng thái đăng nhập (ví dụ: kiểm tra token trong localStorage)
  return localStorage.getItem("token") !== null; // Logic đăng nhập của bạn
};

// Component ProtectedRoute để bảo vệ các route
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

// Layout chính cho ứng dụng (bao gồm NavBar, SideBar, và Main Content)
const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <NavBar />
      <div className="layout-container">
        <SideBar />
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
};

// Component App
function App() {
  return (
    <div className="app">
      <Routes>
        {/* Route Login (luôn khả dụng) */}
        <Route path="/login" element={<Login />} />

        {/* Các route được bảo vệ */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Routes>
                  <Route path="/home" element={<DashBoard />} />
                  <Route path="/files" element={<Documents />} />
                  <Route path="/print" element={<PrintDocument />} />
                  <Route path="/edit/:id" element={<EditDocument />} />
                  {/* Đường dẫn mặc định khi đăng nhập thành công */}
                  <Route path="*" element={<Navigate to="/files" replace />} />
                  <Route path="/UserInfor" element={<UserProfile />} />
                  <Route path="/ViewPayment" element={<ViewPaymentHistory />} />
                  <Route path="/PrintingHistory" element={<PrintingHistory />} />
                </Routes>
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Redirect tất cả các đường dẫn không xác định về trang Login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}

export default App;
