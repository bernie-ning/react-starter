import * as React from 'react';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import StepA from './pages/StepA';
import StepB from './pages/StepB';
import NoPage from './pages/NoPage';
import Login from './pages/Login';
import UseRef from './pages/UseRef';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Form" element={<StepA />} />
            <Route path="DropDownList" element={<StepB />} />
            <Route path="*" element={<NoPage />} />
            <Route path="UseRef" element={<UseRef />} />
          </Route>
          <Route path="Logout" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
