import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
/**
 * <link rel="icon">
      <FontAwesomeIcon icon = {faStore} />
    </link> 
            <link rel="icon" href="path/to/favicon.ico" />

 */