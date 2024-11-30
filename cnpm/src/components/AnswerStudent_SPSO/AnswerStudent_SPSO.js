import { Container, 
        Table, 
        TableBody, 
        TableContainer, 
        TableHead, 
        TableRow, 
        TableCell, 
        Button } from "@mui/material";
import './AnswerStudent_SPSO.css'
import React, { useState } from "react";
import ChatBox from "./ChatBox/ChatBox";


const AnswerStudent_SPSO = () => {
    //fake data 
    const questions = [ 
        { id: 1, asker: "Nguyễn Văn A", date: "23/10/2024", content: "Dạ cho em hỏi tài liệu lâu ngày chưa lấy sẽ được nhận ở đâu vậy ạ. Em sử dụng máy in A.", status: "Chưa trả lời" },
        { id: 2, asker: "Trần Thị B", date: "22/10/2024", content: "Gửi tổ kỹ thuật, Em muốn một số trang có in màu, một số trang không in màu thì em cần làm gì ạ?", status: "Chưa trả lời" },
        { id: 3, asker: "Trương Phinh Lê", date: "22/10/2024", content: "Em không tìm thấy tài liệu in của mình ở máy in qsdsd.", status: "Đã trả lời" },
        { id: 4, asker: "Nguyễn Huỳnh Liêm Chính", date: "27/11/2024", content: "Dạ tổ kĩ thuật cho em hỏi là tài liệu lâu ngày chưa được lấy sẽ phải nhận ở đâu vậy ạ? Do em đang ở quê nên chưa thể lấy ngay được ạ. Em sử dụng máy in C ở cơ sở Lý Thường Kiệt ạ.", status: "Đã trả lời" },
        { id: 5, asker: "Chay thu lenh nay co sao khong a 🐧", date: "12/12/2024", content: "git force push origin/main -f", status: "Chưa trả lời" },
        { id: 6, asker: "Trần Thị XN", date: "22/10/2024", content: "Gửi tổ kỹ thuật, Em muốn một số trang có in màu, một số trang không in màu thì em cần làm gì ạ?", status: "Chưa trả lời" },
        { id: 7, asker: "Trương Phình Lên", date: "22/10/2024", content: "Em không tìm thấy tài liệu in của mình ở máy in qsdsd.", status: "Đã trả lời" },
        { id: 8, asker: "Not admin", date: "27/11/2024", content: "Dạ tổ kĩ thuật cho em hỏi là tài liệu lâu ngày chưa được lấy sẽ phải nhận ở đâu vậy ạ? Em sử dụng máy in C ở cơ sở Lý Thường Kiệt ạ.", status: "Đã trả lời" },
        { id: 9, asker: "Dung bug nua cai coi", date: "23/10/2024", content: "Dạ cho em hỏi tài liệu lâu ngày chưa lấy sẽ được nhận ở đâu vậy ạ. Em sử dụng máy in ABCXYZ.", status: "Chưa trả lời" },
        { id: 10, asker: "Vang trang co don", date: "22/10/2024", content: "Gửi tổ kỹ thuật, Em muốn một số trang có in màu, một số trang không in màu thì em cần làm gì ạ?", status: "Chưa trả lời" },
        { id: 11, asker: "NULL pointer", date: "22/10/2024", content: "Em không tìm thấy tài liệu in của mình ở máy in qsdsd.", status: "Đã trả lời" },
        { id: 12, asker: "git reset --hard origin/main", date: "27/11/2024", content: "Đừng dại mà chạy thử lệnh này nhé 🐧", status: "Đã trả lời" },
        { id: 13, asker: "Push Rejected, rebase or merge", date: "27/11/2024", content: " git commit --amend; git push origin -f  ", status: "Chưa trả lời" },
        { id: 14, asker: "git reset --hard origin/main", date: "27/11/2024", content: "Đừng dại mà chạy thử lệnh này nhé 🐧", status: "Đã trả lời" },
        { id: 15, asker: "git reset --hard origin/main", date: "27/11/2024", content: "Đừng dại mà chạy thử lệnh này nhé 🐧", status: "Đã trả lời" },
        { id: 16, asker: "git reset --hard origin/main", date: "27/11/2024", content: "Đừng dại mà chạy thử lệnh này nhé 🐧", status: "Đã trả lời" },
        { id: 17, asker: "Lương Định P", date: "22/10/2024", content: "Em không tìm thấy tài liệu in của mình ở máy in ạ. Em sử dụng máy in B ạ", status: "Chưa trả lời" },
    ];
    // State paging
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(questions.length / itemsPerPage);
    const currentQuestions = questions.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    //ChatBox
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const handleOpenChat = (question) => {
        setSelectedQuestion(question);
    };
    
    const handleCloseChat = () => {
        setSelectedQuestion(null);
    };
    

    return (
        <Container className="question-container">
            <div className="question-header" > <h2> LỊCH SỬ HỎI ĐÁP </h2> </div>
            <TableContainer className="question-table-container">
                <Table className="question-table">
                    <TableHead className="question-table-header">
                        <TableRow>
                            <TableCell className="STT"> STT </TableCell>
                            <TableCell className="asker"> NGƯỜI HỎI </TableCell>
                            <TableCell className="askdate"> NGÀY HỎI </TableCell>
                            <TableCell> NỘI DUNG HỎI </TableCell>
                            <TableCell className="answered"> TÌNH TRẠNG </TableCell>
                            <TableCell> TRẢ LỜI </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="question-table-body">
                        {currentQuestions.map((question, index) => (
                            <TableRow key={question.id}>
                                <TableCell className="STT">
                                    {(currentPage - 1) * itemsPerPage + index + 1}
                                </TableCell>
                                <TableCell className="asker">{question.asker}</TableCell>
                                <TableCell className="askdate">{question.date}</TableCell>
                                <TableCell>{question.content}</TableCell>
                                <TableCell className="answered">{question.status}</TableCell>
                                <TableCell>
                                    <Button variant="contained" 
                                            className="reply-button"
                                            onClick={() => handleOpenChat(question)}
                                            > TRẢ LỜI 
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {selectedQuestion && (
                                    
                                        <ChatBox
                                            asker={selectedQuestion.asker}
                                            questions={selectedQuestion.content}
                                            onClose={handleCloseChat}
                                        />
                                    
                                )}

            {/* Paging */}
            <div className="pagination-container">
                <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}> 
                    {"<"} 
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button key={index} className={currentPage === index + 1 ? "active" : ""}
                        onClick={() => handlePageChange(index + 1)}
                        >
                        {index + 1}
                    </button>
                ))}
                <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
                    {">"}
                </button>
            </div>
        </Container>

       
    );
};

export default AnswerStudent_SPSO;