import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from "./components/dashboard/index";
import PrintDocument from './components/documentsfile-forstudent/chooseprint/PrintDocument';
import EditDocument from "./components/documentsfile-forstudent/editdocument";
import Documents from "./components/documentsfile-forstudent/index";
import NavBar from "./components/navbar/index";
import SideBar from "./components/sidebar/index";
function App() {
  return (
   
      <div className="app"> 
        <NavBar /> 
        <SideBar /> 
        <div className="main-content"> 
          <Routes> 
            <Route path="/home" element={<DashBoard />} /> 
            <Route path="/files" element={<Documents />} />
                <Route path="print" element={<PrintDocument />} />
                <Route path="edit/:id" element={<EditDocument />} />
           
            </Routes> 
            </div> 
            </div>
          
  );
}

export default App;
