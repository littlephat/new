import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './page/App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Collections from "./page/collections";
import AllProducts from "./page/allproduct";
import Purchase from "./page/purchase";
import ContactUs from "./page/contactus";
import Login from './page/Login';
import Home from './page/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route index element={<App />} />
            <Route path='Home' element={<Home />} />
            <Route path='Collections' element={<Collections />} />
            <Route path='AllProducts' element={<AllProducts />} />
            <Route path='Payment' element={<Purchase />} />
            <Route path='login' element={<Login/>} />
            <Route path='ContactUs' element={<ContactUs />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

