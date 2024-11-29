import React from "react";
import NavBar from "../../navbar";
import Sidebar from "../../sidebar";
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
import AdfScannerIcon from "@mui/icons-material/AdfScanner";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import LocationMenu from "../LocationMenu";
import StateMenu from "../StateMenu";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Pagination from "@mui/material/Pagination";
import ModifyPrinter from "../ModifyPrinter";

const PrinterManagement = () => {
  const [listPrinters, setListPrinters] = React.useState([
    {
      id: 1,
      address: "268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam",
      status: "Hoạt động",
      pagesLeft: "50 trang",
      lastMaintenance: "20/10/2024",
    },
    {
      id: 2,
      address: "VRJ4+65C, Đông Hòa, Dĩ An, Bình Dương",
      status: "Hoạt động",
      pagesLeft: "35 trang",
      lastMaintenance: "20/10/2024",
    },
    {
      id: 3,
      address: "268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam",
      status: "Hoạt động",
      pagesLeft: "83 trang",
      lastMaintenance: "20/10/2024",
    },
    {
      id: 4,
      address: "268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam",
      status: "Hoạt động",
      pagesLeft: "100 trang",
      lastMaintenance: "01/11/2024",
    },
    {
      id: 5,
      address: "VRJ4+65C, Đông Hòa, Dĩ An, Bình Dương",
      status: "Bảo trì",
      pagesLeft: "50 trang",
      lastMaintenance: "20/10/2024",
    },
    {
      id: 6,
      address: "268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam",
      status: "Hoạt động",
      pagesLeft: "50 trang",
      lastMaintenance: "20/10/2024",
    },
    {
      id: 7,
      address: "268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam",
      status: "Hoạt động",
      pagesLeft: "50 trang",
      lastMaintenance: "20/10/2024",
    },
    {
      id: 8,
      address: "VRJ4+65C, Đông Hòa, Dĩ An, Bình Dương",
      status: "Hoạt động",
      pagesLeft: "65 trang",
      lastMaintenance: "20/10/2024",
    },
    {
      id: 9,
      address: "268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam",
      status: "Mất kết nối",
      pagesLeft: "50 trang",
      lastMaintenance: "20/10/2024",
    },
    {
      id: 10,
      address: "268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam",
      status: "Hoạt động",
      pagesLeft: "50 trang",
      lastMaintenance: "20/10/2024",
    },
  ]);
  const [selectedPrinter, setSelectedPrinter] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (item) => {
    setSelectedPrinter({ ...item });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = (updatedPrinter) => {
    setListPrinters((printersList) =>
      printersList.map((printer) => (printer.id === updatedPrinter.id ? updatedPrinter : printer))
    );
    setOpen(false);
  };

  return (
    <>
      <NavBar />
      <Sidebar />
      <Box
        sx={{
          marginLeft: "375px",
          marginTop: "150px",
          marginRight: "40px",
          ".css-1gtchvp-MuiPaper-root": {
            borderRadius: "10px",
          },
        }}
      >
        <Paper elevation={2} width="100%">
          <Box display="flex" justifyContent="space-between" alignItems="center" p={2} sx={{ paddingTop: "3rem" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AdfScannerIcon sx={{ width: "40px", height: "40px" }} />
              <Typography variant="h4">DANH SÁCH MÁY IN</Typography>
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 14,
              py: 2,
              ".MuiButtonBase-root": { textTransform: "none" },
            }}
          >
            <LocationMenu />
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ "&.MuiDivider-root": { borderWidth: "1px" } }}
            />
            <StateMenu />
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ "&.MuiDivider-root": { borderWidth: "1px" } }}
            />
            <Box>
              <Typography variant="h6">Số thứ tự máy in</Typography>
              <TextField id="standard-search" label="Nhập số thứ tự máy in" type="search" variant="standard" />
            </Box>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ "&.MuiDivider-root": { borderWidth: "1px" } }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "#09bcff",
                width: "120px",
                height: "55px",
                fontSize: "1.2rem",
              }}
            >
              Search
            </Button>
          </Box>
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
                    <TableCell>THÔNG TIN ĐỊA CHỈ</TableCell>
                    <TableCell>TRẠNG THÁI</TableCell>
                    <TableCell>SỐ TRANG CÒN LẠI</TableCell>
                    <TableCell>NGÀY CUỐI BẢO TRÌ</TableCell>
                    <TableCell>TÙY CHỌN</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="table-body">
                  {listPrinters.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell component="th" scope="row" sx={{ maxWidth: "250px" }}>
                        {item.address}
                      </TableCell>
                      <TableCell
                        sx={{
                          color:
                            item.status === "Hoạt động"
                              ? "#35B94B"
                              : item.status === "Bảo trì"
                              ? "#FFD700"
                              : item.status === "Mất kết nối"
                              ? "red"
                              : "black",
                        }}
                      >
                        {item.status}
                      </TableCell>
                      <TableCell>{item.pagesLeft}</TableCell>
                      <TableCell>{item.lastMaintenance}</TableCell>
                      <TableCell
                        sx={{
                          ".MuiButtonBase-root": { textTransform: "none" },
                        }}
                      >
                        <Button
                          onClick={() => handleClickOpen(item)}
                          startIcon={<BorderColorIcon sx={{ color: "white" }} />}
                          variant="contained"
                          sx={{
                            bgcolor: "#09bcff",
                            width: "200px",
                            fontSize: "1rem",
                          }}
                        >
                          Chỉnh Sửa
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
                  ".css-1bug3cd-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": { backgroundColor: "#09bcff" },
                }}
              >
                <Pagination count={10} color="primary" />
              </Box>
            </TableContainer>
          </Box>
        </Paper>
      </Box>
      <ModifyPrinter open={open} handleClose={handleClose} printer={selectedPrinter} handleSave={handleSave} />
    </>
  );
};

export default PrinterManagement;
