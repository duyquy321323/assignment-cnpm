import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Pagination from "@mui/material/Pagination";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid2";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import Chip from "@mui/material/Chip";
import Switch from "@mui/material/Switch";

const BoxStyled = {
  px: 2,
  fontWeight: "bold",
  color: "#DB4646",
};

const UserProfile = ({ user, handleClose }) => {
  const historyPrint = [
    {
      date: "25/10/2024",
      printerId: 6,
      address: "VRJ4+65C, Đông Hòa, Dĩ An, Bình Dương",
      fileName: "MMT.pdf",
      pages: 10,
      colorPages: 0,
    },
    {
      date: "25/10/2024",
      printerId: 7,
      address: "VRJ4+65C, Đông Hòa, Dĩ An, Bình Dương",
      fileName: "CNPM.pdf",
      pages: 20,
      colorPages: 9,
    },
    {
      date: "13/09/2024",
      printerId: 1,
      address: "268, Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam",
      fileName: "DBS.pdf",
      pages: 14,
      colorPages: 4,
    },
    {
      date: "18/08/2024",
      printerId: 5,
      address: "268, Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam",
      fileName: "abc.pdf",
      pages: 22,
      colorPages: 12,
    },
    {
      date: "17/08/2024",
      printerId: 6,
      address: "VRJ4+65C, Đông Hòa, Dĩ An, Bình Dương",
      fileName: "lich_su_Dang.pdf",
      pages: 32,
      colorPages: 10,
    },
    {
      date: "12/08/2024",
      printerId: 1,
      address: "268, Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam",
      fileName: "report.pdf",
      pages: 26,
      colorPages: 8,
    },
    {
      date: "06/07/2024",
      printerId: 7,
      address: "VRJ4+65C, Đông Hòa, Dĩ An, Bình Dương",
      fileName: "reportA.pdf",
      pages: 30,
      colorPages: 10,
    },
    {
      date: "30/05/2024",
      printerId: 6,
      address: "VRJ4+65C, Đông Hòa, Dĩ An, Bình Dương",
      fileName: "reportB.pdf",
      pages: 35,
      colorPages: 8,
    },
    {
      date: "20/05/2024",
      printerId: 8,
      address: "VRJ4+65C, Đông Hòa, Dĩ An, Bình Dương",
      fileName: "slide.pdf",
      pages: 20,
      colorPages: 0,
    },
    {
      date: "10/05/2024",
      printerId: 10,
      address: "268, Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam",
      fileName: "slide_A.pdf",
      pages: 23,
      colorPages: 5,
    },
  ];

  const [active, setActive] = React.useState(true);

  return (
    <Paper elevation={2} width="100%">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 4,
          py: 2,
          ".MuiButtonBase-root": { textTransform: "none" },
        }}
      >
        <Typography variant="h4" component="div">
          Hồ sơ sinh viên
        </Typography>
        <Button
          variant="contained"
          onClick={handleClose}
          startIcon={<KeyboardReturnIcon sx={{ color: "white" }} />}
          sx={{
            bgcolor: "#09bcff",
            fontSize: "1rem",
          }}
        >
          Trở lại
        </Button>
      </Box>
      <Divider variant="middle" flexItem sx={{ "&.MuiDivider-root": { borderWidth: "1px" } }} />
      <Box sx={{ display: "flex", py: 4 }}>
        <Box sx={{ flex: 3, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <Avatar
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HCMUT_official_logo.png/1200px-HCMUT_official_logo.png"
            sx={{ width: 125, height: 125, border: 1, borderColor: "lightgrey" }}
          />
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" , mt: 2 }}>
            <Chip size="small" label={active ? "Active" : "Inactive"} color={active ? "success" : "error"} />
            <Switch checked={active} onChange={(e) => setActive(e.target.checked)} />
          </Box>
        </Box>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ "&.MuiDivider-root": { borderWidth: "1px" } }}
        />
        <Box sx={{ flex: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Grid container spacing={2} sx={{ ml: { md: 5 } }}>
            <Grid size={6}>
              <Typography variant="h6" component="div">
                <Box component="span" sx={BoxStyled}>
                  Họ và Tên:
                </Box>
                {user.name}
              </Typography>
            </Grid>
            <Grid size={6}>
              <Typography variant="h6" component="div">
                <Box component="span" sx={BoxStyled}>
                  Giới tính:
                </Box>
                Nam
              </Typography>
            </Grid>
            <Grid size={6}>
              <Typography variant="h6" component="div">
                <Box component="span" sx={BoxStyled}>
                  Ngày sinh:
                </Box>
                {user.birth}
              </Typography>
            </Grid>
            <Grid size={6}>
              <Typography variant="h6" component="div">
                <Box component="span" sx={BoxStyled}>
                  Số điện thoại:
                </Box>
                {user.phone}
              </Typography>
            </Grid>
            <Grid size={6}>
              <Typography variant="h6" component="div">
                <Box component="span" sx={BoxStyled}>
                  Email:
                </Box>
                {user.email}
              </Typography>
            </Grid>
            <Grid size={6}>
              <Typography variant="h6" component="div">
                <Box component="span" sx={BoxStyled}>
                  Mã số sinh viên:
                </Box>
                {user.userId}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Divider variant="middle" flexItem sx={{ "&.MuiDivider-root": { borderWidth: "1px" } }} />
      <Typography variant="h4" component="div" sx={{ p: 2, pl: 4 }}>
        Lịch sử in ấn
      </Typography>
      <Box
        sx={{
          ".css-70zvr5-MuiTableContainer-root": {
            marginX: "2rem",
            borderRadius: "10px",
            width: "auto",
          },
        }}
      >
        <TableContainer>
          <Table>
            <TableHead className="table-header">
              <TableRow>
                <TableCell>Ngày in</TableCell>
                <TableCell>STT máy in</TableCell>
                <TableCell>Địa chỉ máy in</TableCell>
                <TableCell>Tài liệu in</TableCell>
                <TableCell sx={{ width: "9%" }}>Số lượng giấy thường</TableCell>
                <TableCell sx={{ width: "9%" }}>Số lượng giấy màu</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table-body">
              {historyPrint.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.printerId}</TableCell>
                  <TableCell>{item.address}</TableCell>
                  <TableCell>{item.fileName}</TableCell>
                  <TableCell>{item.pages}</TableCell>
                  <TableCell>{item.colorPages}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box
            display="flex"
            justifyContent="center"
            m={2}
            sx={{
              ".css-1bug3cd-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "#09bcff",
              },
            }}
          >
            <Pagination count={2} color="primary" />
          </Box>
        </TableContainer>
      </Box>
    </Paper>
  );
};

export default UserProfile;
