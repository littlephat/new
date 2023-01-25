import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './page/App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Collections from "./page/collections";
import AllProducts from "./page/allproduct";
import Purchase from "./page/purchase";
import ContactUs from "./page/contactus";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path='Collections' element={<Collections />} />
      <Route path='AllProducts' element={<AllProducts />} />
      <Route path='Payment' element={<Purchase />} />
      <Route path='ContactUs' element={<ContactUs />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

