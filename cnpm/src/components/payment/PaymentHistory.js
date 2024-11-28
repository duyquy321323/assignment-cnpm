// components/documents/Documents.js
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DescriptionIcon from '@mui/icons-material/Description';
import FolderIcon from '@mui/icons-material/Folder';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HistoryIcon from '@mui/icons-material/History';
import { Box, Button, Card, CardMedia, Checkbox, Container, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentHistory.css'; // Import CSS file
import white_paper from '../../assets/image/white-paper.png';
import color_paper from '../../assets/image/color-paper.jpg';

const PaymentHistory = () => {
    const [documents, setDocuments] = useState([]);
    const [pageStorage, setPageStorage] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const documentsPerPage = 5;
    const [openUploadDialog, setOpenUploadDialog] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        // Giả lập dữ liệu tài liệu
        const fakeDocuments = [
            { id: 1, transaction: "Thanh toán tài liệu", numPage: "40 trang", cost: "19.000đ", date: "16/11/2024", status: "Đã thanh toán" },
            { id: 2, transaction: "Thanh toán tài liệu", numPage: "20 trang", cost: "10.000đ", date: "16/11/2024", status: "Đã thanh toán" },
            { id: 3, transaction: "Thanh toán tài liệu", numPage: "20 trang", cost: "10.000đ", date: "16/11/2024", status: "Đã thanh toán" },
            { id: 4, transaction: "Thanh toán tài liệu", numPage: "40 trang", cost: "19.000đ", date: "16/11/2024", status: "Đã thanh toán" },
            { id: 5, transaction: "Thanh toán tài liệu", numPage: "40 trang", cost: "19.000đ", date: "16/11/2024", status: "Đã thanh toán" },
            { id: 6, transaction: "Thanh toán tài liệu", numPage: "80 trang", cost: "35.000đ", date: "16/11/2024", status: "Đã thanh toán" },
            { id: 7, transaction: "Thanh toán tài liệu", numPage: "40 trang", cost: "19.000đ", date: "16/11/2024", status: "Đã thanh toán" },
            { id: 8, transaction: "Thanh toán tài liệu", numPage: "40 trang", cost: "19.000đ", date: "16/11/2024", status: "Đã thanh toán" },
            { id: 9, transaction: "Thanh toán tài liệu", numPage: "40 trang", cost: "19.000đ", date: "16/11/2024", status: "Đã thanh toán" },
            { id: 10, transaction: "Thanh toán tài liệu", numPage: "20 trang", cost: "10.000đ", date: "16/11/2024", status: "Đã thanh toán" },
        ];
        setDocuments(fakeDocuments);
    }, []);
    useEffect(() => {
        // Giả lập dữ liệu tài liệu
        const fakePageStorage = [
            { id: 1, type: "NORMAL", quantity: 57 },
            { id: 2, type: "COLOR", quantity: 25 },
        ];
        setPageStorage(fakePageStorage);
    }, []);
    const handleHomePageClick = () => {
        navigate(`/home`);
    };
    const handlePurchaseClick = () => {
        navigate('/payment/purchase');
    };
    // Lấy dữ liệu của trang hiện tại
    const indexOfLastDocument = currentPage * documentsPerPage;
    const indexOfFirstDocument = indexOfLastDocument - documentsPerPage;
    const currentDocuments = documents.slice(indexOfFirstDocument, indexOfLastDocument);

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };
    const breadcrumbs = [<Link underline="hover" key="1" color="inherit" href="/"> Home </Link>, <Typography key="3" sx={{ color: 'text.primary' }}> Thanh toán </Typography>,];

    return (
        <Container maxWidth="lg" className="documents-container">
            <Stack spacing={1}>
                <Breadcrumbs separator="›" className="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>

            </Stack>
            <Paper className="documents-header">
                <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
                    <Typography variant="h4" component="h1">
                        <HistoryIcon className="icon" />
                        LỊCH SỬ GIAO DỊCH
                    </Typography>
                    <Box mt={3} p={2} component={Paper} className="remaining-container" >
                        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                            <Box display="flex" alignItems="center" sx={{ width: '48%' }}>
                                <CardMedia
                                    className='card-media'
                                    image={color_paper} // Đường dẫn ảnh (thay bằng ảnh thực tế)
                                />
                                <Typography variant="body2" sx={{ marginLeft: '10px' }}>: {pageStorage.find((page) => page.type === "COLOR")?.quantity || 0} trang</Typography>  {/* Số trang thực tế */}
                            </Box>
                            <Box display="flex" alignItems="center" sx={{ width: '48%' }}>
                                <CardMedia
                                    className='card-media'
                                    image={white_paper} // Đường dẫn ảnh (thay bằng ảnh thực tế)
                                />
                                <Typography variant="body2" sx={{ marginLeft: '10px' }}>: {pageStorage.find((page) => page.type === "NORMAL")?.quantity || 0} trang</Typography>  {/* Số trang thực tế */}
                            </Box>
                        </Box>
                    </Box>

                </Box>
                <div style={{ width: '100%', height: '100%', border: '1px #D0D5DD solid' }}></div>
                <TableContainer className="tablecontainer">
                    <Table className="documents-table">
                        <TableHead className="table-header">
                            <TableRow>
                                <TableCell>Giao dịch</TableCell>
                                <TableCell>Số lượng</TableCell>
                                <TableCell>Số tiền</TableCell>
                                <TableCell>Ngày đăng</TableCell>
                                <TableCell>Trạng thái</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="table-body">
                            {currentDocuments.map((doc) => (
                                <TableRow key={doc.id}>
                                    <TableCell component="th" scope="row">
                                        <FolderIcon /> {doc.transaction}
                                    </TableCell>
                                    <TableCell>
                                        <DescriptionIcon /> {doc.numPage}
                                    </TableCell>
                                    <TableCell>
                                        <AttachMoneyIcon /> {doc.cost}
                                    </TableCell>
                                    <TableCell>
                                        <AccessTimeIcon /> {doc.date}
                                    </TableCell>
                                    <TableCell>
                                        {doc.status}
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
                <Button variant="contained" color="primary" style={{ marginRight: '10px' }} onClick={handlePurchaseClick} >
                    Mua thêm
                </Button>
                <Button variant="contained" color="secondary" onClick={handleHomePageClick} >
                    Trang chủ
                </Button>
            </Box>

        </Container>
    );
};

export default PaymentHistory;
