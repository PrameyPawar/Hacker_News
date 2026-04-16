import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import Top from './pages/Top';
import Show from './pages/Show';
import Ask from './pages/Ask';
import Jobs from './pages/Jobs';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="top" element={<Top />} />
          <Route path="show" element={<Show />} />
          <Route path="ask" element={<Ask />} />
          <Route path="jobs" element={<Jobs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
