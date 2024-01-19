import './App.css';
import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Customers from './pages/Customers';
import DashBoard from "./pages/Dashboard";
import Help from "./pages/Help";
import Income from "./pages/Income";
import Product from "./pages/Product";
import Promote from "./pages/Promote";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/customers" />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/help" element={<Help />} />
          <Route path="/income" element={<Income />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Promote" element={<Promote />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
