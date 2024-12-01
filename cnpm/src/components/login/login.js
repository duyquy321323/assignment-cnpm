// import React from "react";
// import "./Login.css";
// import illustrator from './../../assets/image/Illustration.png';
// const Login = () => {
//   return (
//     <div className="login-container">
//       {/* Left Section */}
//       <div className="login-left">
//         <img
//           src="illustrator"
//           alt="Illustration"
//           className="illustration-image"
//         />
//       </div>

//       {/* Right Section */}
//       <div className="login-right">
//         <div className="login-form">
//           <h2>Chào mừng đã đến với dịch vụ in ấn</h2>
//           <h3>HCMUT_SPSS</h3>
//           <form>
//             <div className="input-group">
//               <label>Email</label>
//               <input type="email" placeholder="johndadev" />
//             </div>
//             <div className="input-group">
//               <label>Password</label>
//               <input type="password" placeholder="***********" />
//             </div>
//             <button type="submit" className="login-button">
//               LOG IN
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import illustrator from './../../assets/image/Illustration.png';
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Giả sử đây là nơi bạn thực hiện xác thực (ví dụ: gọi API đăng nhập)
    if (email === "johndadev" && password === "123456") {
      // Lưu token giả vào localStorage
      localStorage.setItem("token", "fake-jwt-token");

      // Chuyển hướng đến trang chính sau khi đăng nhập thành công
      navigate("/files");
    } else {
      alert("Sai email hoặc mật khẩu. Vui lòng thử lại!");
    }
  };

  return (
    <div className="login-container">
      {/* Phần bên trái */}
      <div className="login-left">
        <div className="illustration">
          <img
            src={illustrator}
            alt="Illustration"
            className="illustration-image"
          />
        </div>
      </div>

      {/* Phần bên phải */}
      <div className="login-right">
        <div className="login-form">
          <h2>Chào mừng đã đến với dịch vụ in ấn</h2>
          <h3>HCMUT_SPSS</h3>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="text"
                placeholder="johndadev"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="***********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
