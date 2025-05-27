import React from 'react';
import { createRoot } from 'react-dom/client';  // Updated import
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);  // Create root instance

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
