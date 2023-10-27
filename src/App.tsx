import * as React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import StepA from './pages/StepA';
import StepB from './pages/StepB';
import NoPage from './pages/NoPage';
import Login from './pages/Login';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="StepA" element={<StepA />} />
            <Route path="StepB" element={<StepB />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="Logout" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
