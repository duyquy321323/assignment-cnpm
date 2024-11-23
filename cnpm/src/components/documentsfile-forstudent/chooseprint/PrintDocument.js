import { Box, Button, Container, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React from 'react';
import './PrintDocument.css';

const PrintDocument = () => {
  return (
    <Container maxWidth="lg" className="print-document-container">
      <Typography variant="h4" component="h1" gutterBottom>
        CHỌN MÁY IN
      </Typography>
      <Box component="form" noValidate autoComplete="off" p={2} className="print-form">
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel>Vị Trí</InputLabel>
          <Select label="Vị Trí">
            <MenuItem value="Tất cả">Tất cả</MenuItem>
            <MenuItem value="Phòng 101">Phòng 101</MenuItem>
            <MenuItem value="Phòng 102">Phòng 102</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel>Tình Trạng</InputLabel>
          <Select label="Tình Trạng">
            <MenuItem value="Tất cả">Tất cả</MenuItem>
            <MenuItem value="Sẵn sàng">Sẵn sàng</MenuItem>
            <MenuItem value="Bảo trì">Bảo trì</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Số Thứ Tự Máy In"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" className="search-button">
          Tìm kiếm
        </Button>
      </Box>
      <TableContainer component={Paper} className="print-table-container">
        <Table aria-label="print table">
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
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Phòng 101</TableCell>
              <TableCell>2024-11-16</TableCell>
              <TableCell>5 phút</TableCell>
              <TableCell>20 lần</TableCell>
              <TableCell>Sẵn sàng</TableCell>
              <TableCell><Button variant="contained" color="primary">Chọn</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Phòng 102</TableCell>
              <TableCell>2024-11-16</TableCell>
              <TableCell>10 phút</TableCell>
              <TableCell>15 lần</TableCell>
              <TableCell>Sẵn sàng</TableCell>
              <TableCell><Button variant="contained" color="primary">Chọn</Button></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default PrintDocument;
