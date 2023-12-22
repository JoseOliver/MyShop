import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import NavBar from './NavBar/NavBar.jsx';
import Categorias from './Categorias/Categorias.jsx';

import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <div className='navbar-wrap'></div>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/categorias" element={<Categorias />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
