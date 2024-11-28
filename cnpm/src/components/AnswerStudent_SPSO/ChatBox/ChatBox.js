import React, { useState } from "react";
import "./ChatBox.css";
import Message from "./Message";

  
const ChatBox = ({ asker, questions, onClose }) => {
    const mockData = [
        {user: "Lương Định P", date: "21/10/2024", content: "Dạ cho em hỏi tài liệu lâu ngày chưa lấy sẽ được nhận ở đâu vậy ạ."},
        {user: "Admin Nguyen", date: "21/10/2024", content: "Bạn cứ đến máy in bạn đã chọn in để lấy nhé.\nChúc bạn học tốt!\nThân."},
        {user: "Lương Định P", date: "22/10/2024", content: "Em không tìm thấy tài liệu in của mình ở máy in ạ. Em sử dụng máy in B ạ."},
    ];

    const [answer, setAnswer] = useState("");

    const handleSubmitAnswer = () => {
        console.log("Trả lời:", answer);
        // Thêm logic lưu câu trả lời (API hoặc state)
        onClose();
    };

    return (
        <div className="chatbox-container">
            <button className="chatbox-close" onClick={onClose}>
                X
            </button>
            {/* <h3>Người hỏi: {asker}</h3>
            <p>Câu hỏi: {questions}</p> */}
            {mockData.map((mockData, index) =>(
                <Message user={mockData.user} date={mockData.date} content={mockData.content}/>
            ))}
            
            <div className="chatbox-answer">
                <h3 className="chatbox-user"> Admin Nguyen </h3>
                <h4 className="chatbox-note"> Viết trả lời </h4>
                <div>
                    <textarea 
                        className="chatbox-content"
                        placeholder="Viết trả lời tại đây">   
                    </textarea>
                </div> 
                <button variant="contained" 
                        className="chatbox-submit"
                        onClick={handleSubmitAnswer}>
                            TRẢ LỜI
                </button>
            </div>
        </div>
    );
};

export default ChatBox;
