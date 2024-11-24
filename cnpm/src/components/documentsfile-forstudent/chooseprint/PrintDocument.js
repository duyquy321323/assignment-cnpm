import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  FormControl,
  Link,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { FcPrint } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import "./PrintDocument.css";
const ITEMS_PER_PAGE = 5; // Set number of rows per page

const PrintDocument = () => {
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [printerNumber, setPrinterNumber] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  // Example mock data
  const mockData = [
    { id: 1, address: "268 Lý Thường Kiệt, HCM", date: "2024-10-23", waitTime: "10 phút", usageHistory: "Bạn chưa sử dụng máy này", status: "Có tài liệu đang trong quá trình" },
    { id: 2, address: "Vĩnh Lộc, Bình Dương", date: "2024-10-22", waitTime: "5 phút", usageHistory: "CNPdf lịch sử upload", status: "Máy in đã sẵn sàng" },
    { id: 3, address: "268 Lý Thường Kiệt, HCM", date: "2024-10-23", waitTime: "3 phút", usageHistory: "abc.pdf", status: "Máy in đang in lại tài liệu bạn" },
    { id: 4, address: "Vĩnh Lộc, Bình Dương", date: "2024-10-22", waitTime: "4 phút", usageHistory: "hestingsarea.pdf", status: "Có tài liệu đang trong quá trình" },
    { id: 5, address: "268 Lý Thường Kiệt, HCM", date: "2024-10-23", waitTime: "7 phút", usageHistory: "syncdoc", status: "Máy in sẵn sàng" },
    { id: 6, address: "Vĩnh Lộc, Bình Dương", date: "2024-10-22", waitTime: "6 phút", usageHistory: "hestings.pdf", status: "Máy in sẵn sàng" },
    { id: 7, address: "Vĩnh Lộc, Bình Dương", date: "2024-10-22", waitTime: "8 phút", usageHistory: "Bạn chưa sử dụng máy này", status: "Có tài liệu đang trong quá trình" },
    { id: 8, address: "268 Lý Thường Kiệt, HCM", date: "2024-10-23", waitTime: "9 phút", usageHistory: "syncfile.pdf", status: "Máy in sẵn sàng" },
  ];

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Logic to calculate the data for the current page
  const displayedData = mockData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={() => navigate('/')}>
      Home
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/documents" onClick={() => navigate('/documents')}>
      Tài liệu của tôi
    </Link>,
    <Typography key="3" sx={{ color: 'text.primary' }}>
      In tài liệu
    </Typography>,
  ];
  return (
    <Container maxWidth="lg" className="print-document-container">
      <Stack spacing={1}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <Paper className="printdocuments-header">
      <Typography variant="h4" component="h1" gutterBottom>
      <FcPrint className="icon"/>
        CHỌN MÁY IN
      </Typography>
      <div style={{width: '100%', height: '100%', border: '1px #D0D5DD solid'}}></div>
      <Box component="form" className="print-form" noValidate autoComplete="off">
  {/* Vị Trí Group */}
  <div className="filter-group">
    <Typography variant="body1" component="label">
      Vị Trí
    </Typography>
    <FormControl sx={{ minWidth: 300 }}>
      <Select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        displayEmpty
        inputProps={{ "aria-label": "Vị Trí" }}
      >
        <MenuItem value="">Chọn vị trí</MenuItem>
        <MenuItem value="CS1">Cơ sở 1</MenuItem>
        <MenuItem value="CS2">Cơ sở 2</MenuItem>
      </Select>
    </FormControl>
  </div>

  {/* Tình Trạng Group */}
  <div className="filter-group">
    <Typography variant="body1" component="label">
      Tình Trạng
    </Typography>
    <FormControl sx={{ minWidth: 300 }}>
      <Select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        displayEmpty
        inputProps={{ "aria-label": "Tình Trạng" }}
      >
        <MenuItem value="">Chọn tình trạng</MenuItem>
        <MenuItem value="available">Sẵn sàng</MenuItem>
        <MenuItem value="in-use">Máy in đang in</MenuItem>
      </Select>
    </FormControl>
  </div>

  {/* Số Thứ Tự Máy In Group */}
  <div className="filter-group">
    <Typography variant="body1" component="label">
      Số Thứ Tự Máy In
    </Typography>
    <TextField
      variant="outlined"
      placeholder="Nhập số thứ tự máy in"
      value={printerNumber}
      onChange={(e) => setPrinterNumber(e.target.value)}
      sx={{ minWidth: 300 }}
    />
  </div>

  {/* Search Button */}
  <Button
    variant="contained"
    color="primary"
    className="search-button"
    onClick={() => console.log("Tìm kiếm")}
  >
    Tìm kiếm
  </Button>
</Box>

      <TableContainer component={Paper} className="print-table-container">
        <Table>
          <TableHead className="table-header">
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>THÔNG TIN ĐỊA CHỈ</TableCell>
              <TableCell>NGÀY SỬ DỤNG</TableCell>
              <TableCell>THỜI GIAN CHỜ</TableCell>
              <TableCell>LỊCH SỬ SỬ DỤNG</TableCell>
              <TableCell>TÌNH TRẠNG</TableCell>
              <TableCell>CHỌN MÁY IN</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.waitTime}</TableCell>
                <TableCell>{item.usageHistory}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>
                  <Button variant="contained" className="upload-button">
                    Upload Document
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
           
      <Box display="flex" justifyContent="center" mt={3}>
        <Pagination
          count={Math.ceil(mockData.length / ITEMS_PER_PAGE)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
      </Paper>
    </Container>
  );
};

export default PrintDocument;
