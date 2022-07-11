import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import AppProvider from './Context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppProvider><App /></AppProvider>}></Route>
        <Route path="/:basefee/:knowfee/:suppfee" element={<AppProvider><App /></AppProvider>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
