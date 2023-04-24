import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import Forms from "./components/form/Form.js";
import View from "./pages/View.js";
import EditMpdel from "./components/editmodel/EditMpdel.js";
import Loging from "./pages/Loging/Loging.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  return (
    <div>
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loging />} />
        <Route path='/add' element={<Forms />} />
        <Route path='/view' element={<View />} />
        <Route path='/edit/:id' element={<EditMpdel />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
