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
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Divider from "@mui/material/Divider";
import Pagination from "@mui/material/Pagination";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Avatar from "@mui/material/Avatar";
import InfoIcon from "@mui/icons-material/Info";
import UserProfile from "../UserProfile";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const UserManagement = () => {
  const listUsers = [
    {
      id: 1,
      name: "NGUYỄN VĂN A",
      userId: "221xxxx",
      email: "ten.sinhvien@hcmut.edu.vn",
      phone: "0123456789",
      birth: "01/01/2004",
      status: "Hoạt động",
    },
    {
      id: 2,
      name: "NGUYỄN VĂN B",
      userId: "221xxxx",
      email: "ten.sinhvien@hcmut.edu.vn",
      phone: "0123456789",
      birth: "01/01/2004",
      status: "Hoạt động",
    },
    {
      id: 3,
      name: "NGUYỄN VĂN C",
      userId: "221xxxx",
      email: "ten.sinhvien@hcmut.edu.vn",
      phone: "0123456789",
      birth: "01/01/2004",
      status: "Hoạt động",
    },
    {
      id: 4,
      name: "NGUYỄN VĂN D",
      userId: "221xxxx",
      email: "ten.sinhvien@hcmut.edu.vn",
      phone: "0123456789",
      birth: "01/01/2004",
      status: "Hoạt động",
    },
    {
      id: 5,
      name: "NGUYỄN VĂN E",
      userId: "221xxxx",
      email: "ten.sinhvien@hcmut.edu.vn",
      phone: "0123456789",
      birth: "01/01/2004",
      status: "Hoạt động",
    },
    {
      id: 6,
      name: "NGUYỄN VĂN F",
      userId: "221xxxx",
      email: "ten.sinhvien@hcmut.edu.vn",
      phone: "0123456789",
      birth: "01/01/2004",
      status: "Hoạt động",
    },
    {
      id: 7,
      name: "NGUYỄN VĂN G",
      userId: "221xxxx",
      email: "ten.sinhvien@hcmut.edu.vn",
      phone: "0123456789",
      birth: "01/01/2004",
      status: "Hoạt động",
    },
    {
      id: 8,
      name: "NGUYỄN VĂN H",
      userId: "221xxxx",
      email: "ten.sinhvien@hcmut.edu.vn",
      phone: "0123456789",
      birth: "01/01/2004",
      status: "Hoạt động",
    },
    {
      id: 9,
      name: "NGUYỄN VĂN I",
      userId: "221xxxx",
      email: "ten.sinhvien@hcmut.edu.vn",
      phone: "0123456789",
      birth: "01/01/2004",
      status: "Hoạt động",
    },
    {
      id: 10,
      name: "NGUYỄN VĂN J",
      userId: "221xxxx",
      email: "ten.sinhvien@hcmut.edu.vn",
      phone: "0123456789",
      birth: "01/01/2004",
      status: "Hoạt động",
    },
  ];
  const [open, setOpen] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState({});
  const handleOpen = (item) => {
    setSelectedUser({ ...item });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          marginLeft: "375px",
          marginTop: "100px",
          marginRight: "40px",
          ".css-1gtchvp-MuiPaper-root": {
            borderRadius: "10px",
          },
        }}
      >
        <Breadcrumbs separator="›" className="breadcrumb">
          <Link underline="hover" key="1" color="inherit" href="/">
            Trang chủ
          </Link>
          <Typography key="3" sx={{ color: "gray" }}>
            Quản lý sinh viên
          </Typography>
        </Breadcrumbs>
        {open ? (
          <UserProfile user={selectedUser} handleClose={handleClose} />
        ) : (
          <Paper elevation={2} width="100%">
            <Box display="flex" justifyContent="space-between" alignItems="center" p={2} sx={{ paddingTop: "3rem" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <SupervisedUserCircleIcon sx={{ width: "40px", height: "40px" }} />
                <Typography variant="h4">DANH SÁCH SINH VIÊN</Typography>
              </Box>
              <Button
                variant="outlined"
                startIcon={<CalendarTodayIcon />}
                sx={{
                  color: "black",
                  borderColor: "black",
                  "&.MuiButtonBase-root": { textTransform: "none" },
                  width: "150px",
                  height: "50px",
                  borderRadius: "10px",
                }}
              >
                Date
              </Button>
            </Box>
            <Divider variant="middle" sx={{ "&.MuiDivider-root": { borderWidth: "1px" } }} />
            <FormControl
              sx={{
                m: 4,
                width: "300px",
                minWidth: "150px",
                ".css-jupps9-MuiInputBase-root-MuiOutlinedInput-root": { borderRadius: "10px" },
              }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">Tìm kiếm</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="text"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label="Tìm kiếm"
              />
            </FormControl>
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
                      <TableCell>STT</TableCell>
                      <TableCell sx={{ paddingLeft: "4rem" }}>HỌ VÀ TÊN</TableCell>
                      <TableCell>EMAIL</TableCell>
                      <TableCell>NGÀY TRUY CẬP GẦN NHẤT</TableCell>
                      <TableCell>TÙY CHỌN</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="table-body">
                    {listUsers.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell component="th" scope="row" sx={{ maxWidth: "250px" }}>
                          <Box display="flex" alignItems="center" gap={1.5}>
                            <Avatar
                              alt=""
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HCMUT_official_logo.png/1200px-HCMUT_official_logo.png"
                            />
                            {item.name}
                          </Box>
                        </TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>01/12/2024 12:00 AM</TableCell>
                        <TableCell
                          sx={{
                            ".MuiButtonBase-root": { textTransform: "none" },
                          }}
                        >
                          <Button
                            onClick={() => handleOpen(item)}
                            startIcon={<InfoIcon sx={{ color: "white" }} />}
                            variant="contained"
                            sx={{
                              bgcolor: "#09bcff",
                              width: "200px",
                              fontSize: "1rem",
                            }}
                          >
                            Chi tiết
                          </Button>
                        </TableCell>
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
                  <Pagination count={10} color="primary" />
                </Box>
              </TableContainer>
            </Box>
          </Paper>
        )}
      </Box>
    </>
  );
};

export default UserManagement;
