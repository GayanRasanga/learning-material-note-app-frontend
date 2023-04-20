import React from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar.js";
import { Route, Routes } from "react-router-dom";
import Forms from "./components/form/Form.js";
import View from "./pages/View.js";
import EditMpdel from "./components/editmodel/EditMpdel.js";
import Loging from "./pages/Loging/Loging.js";


export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Loging />} />
        <Route path='/add' element={<Forms />} />
        <Route path='/view' element={<View />} />
        <Route path='/edit/:id' element={<EditMpdel />} />
      </Routes>
    </div>
  );
}
