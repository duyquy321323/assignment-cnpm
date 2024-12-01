// components/documents/Documents.js
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionIcon from '@mui/icons-material/Description';
import FolderIcon from '@mui/icons-material/Folder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, Checkbox, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { FaFileAlt } from "react-icons/fa";
import { GrFormUpload } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import './Documents.css'; // Import CSS file

const Documents = () => {
  const [documents, setDocuments] = useState([]);
  const [selectedDocuments, setSelectedDocuments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const documentsPerPage = 5;
  const [openUploadDialog, setOpenUploadDialog] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Giả lập dữ liệu tài liệu
    const fakeDocuments = [
      { id: 1, name: "LỊCH_SỬ_ĐẢNG_CỘNG_SẢN_VIỆT_NAM.pdf", size: "28.50 KB", date: "16/11/2024" },
      { id: 2, name: "CÔNG_NGHỆ_PHẦN_MỀM.docx", size: "28.50 KB", date: "16/11/2024" },
      { id: 3, name: "HT_CƠ_SỞ_DỮ_LIỆU.docx", size: "28.50 KB", date: "16/11/2024" },
      { id: 4, name: "MMT.docx", size: "28.50 KB", date: "16/11/2024" },
      { id: 5, name: "AIIBT.docx", size: "28.50 KB", date: "16/11/2024" },
      { id: 6, name: "HETNGHIRA01.docx", size: "28.50 KB", date: "16/11/2024" },
      { id: 7, name: "Document 7", size: "28.50 KB", date: "16/11/2024" },
      { id: 8, name: "Document 8", size: "28.50 KB", date: "16/11/2024" },
      { id: 9, name: "Document 9", size: "28.50 KB", date: "16/11/2024" },
      { id: 10, name: "Document 10", size: "28.50 KB", date: "16/11/2024" },
    ];
    setDocuments(fakeDocuments);
  }, []);

  const handleSelectDocument = (event, doc) => {
    if (event.target.checked) {
      setSelectedDocuments([...selectedDocuments, doc]);
    } else {
      setSelectedDocuments(selectedDocuments.filter((d) => d.id !== doc.id));
    }
  };

  const handleEditClick = () => { if (selectedDocuments.length > 0) { 
    const selectedDoc = selectedDocuments[0]; 
    navigate(`/edit/${selectedDoc.id}`, { state: { document: selectedDoc } });
 }
};
// const handlePrintClick = () => { if (selectedDocuments.length > 0) {
//    const selectedDoc = selectedDocuments[0];
//     navigate(`/print/${selectedDoc.id}`, { state: { document: selectedDoc } }); }
  
//   };
// const handlePrintClick = () => {
//   if (selectedDocuments.length > 0) {
//     const selectedDoc = selectedDocuments[0];
//     navigate(`/files/print`, { state: { document: selectedDoc } });
//   }
// };
const handlePrintClick = () => {
  //   if (selectedDocuments.length > 0) {
  //     const selectedDoc = selectedDocuments[0];
      navigate('/print');
  //   }
   };
  const handleDeleteClick = (document) => {
    // Handle delete document
    alert(`Deleting document: ${document.name}`);
  };

  const handleViewClick = (document) => {
    // Handle view document
    alert(`Viewing document: ${document.name}`);
  };

  const handleUploadClick = () => {
    setOpenUploadDialog(true);
  };

  const handleUploadClose = () => {
    setOpenUploadDialog(false);
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    // Handle upload document
    setOpenUploadDialog(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.info('You clicked a breadcrumb.');
  };
  // Lấy dữ liệu của trang hiện tại
  const indexOfLastDocument = currentPage * documentsPerPage;
  const indexOfFirstDocument = indexOfLastDocument - documentsPerPage;
  const currentDocuments = documents.slice(indexOfFirstDocument, indexOfLastDocument);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const breadcrumbs = [ <Link underline="hover" key="1" color="inherit" href="/"> Home </Link>, <Typography key="3" sx={{ color: 'text.primary' }}> Tài liệu của tôi </Typography>, ];

  return (
    <Container maxWidth="lg" className="documents-container">
            <Stack spacing={1}>
              <Breadcrumbs separator="›"  className="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        
        </Stack>

      <Paper className="documents-header">
        <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
          <Typography variant="h4" component="h1">
          <FaFileAlt className="icon"/>
            TÀI LIỆU ĐÃ ĐĂNG TẢI
          </Typography>
          <Button variant="contained" color="primary" onClick={handleUploadClick}>
          <GrFormUpload className="icon"/>
            ĐĂNG TẢI TÀI LIỆU
          </Button>
        </Box>
        <div style={{width: '100%', height: '100%', border: '1px #D0D5DD solid'}}></div>
        <TableContainer className="tablecontainer">
          <Table className="documents-table">
            <TableHead className="table-header">
              <TableRow>
                <TableCell>Chọn</TableCell>
                <TableCell>Tên tài liệu</TableCell>
                <TableCell>Kích cỡ</TableCell>
                <TableCell>Ngày đăng</TableCell>
                <TableCell>Hành động</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table-body">
              {currentDocuments.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedDocuments.includes(doc)}
                      onChange={(event) => handleSelectDocument(event, doc)}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <FolderIcon /> {doc.name}
                  </TableCell>
                  <TableCell>
                    <DescriptionIcon /> {doc.size}
                  </TableCell>
                  <TableCell>
                    <AccessTimeIcon /> {doc.date}
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleViewClick(doc)}>
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteClick(doc)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box display="flex" justifyContent="center" m={2}>
            <Pagination
              count={Math.ceil(documents.length / documentsPerPage)}
              page={currentPage}
              onChange={handleChangePage}
              color="primary"
            />
          </Box>
        </TableContainer>
      </Paper>
      <Box mt={3} p={2} component={Paper} className="actions-container">
        <Button variant="contained" color="primary" style={{ marginRight: '10px' }} onClick={handlePrintClick} disabled={selectedDocuments.length === 0}>
          In file
        </Button>
        <Button variant="contained" color="secondary" onClick={handleEditClick} disabled={selectedDocuments.length === 0}>
          Edit file
        </Button>
      </Box>
      <Dialog open={openUploadDialog} onClose={handleUploadClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Đăng tải tài liệu</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Nhập tên và chọn file tài liệu để đăng tải.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Tên tài liệu"
            fullWidth
          />
          <input
            accept="*"
            type="file"
            style={{ marginTop: '16px', marginBottom: '16px' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUploadClose} color="primary">
            Hủy
          </Button>
          <Button onClick={handleUploadSubmit} color="primary">
            Đăng tải
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Documents;
