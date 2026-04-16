import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import Top from './pages/Top';
import Show from './pages/Show';
import Ask from './pages/Ask';
import Jobs from './pages/Jobs';
import Profile from './pages/Profile';
import Comments from './pages/Comments';
import Settings from './pages/Settings';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter basename="/Hacker_News/">
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="top" element={<Top />} />
            <Route path="show" element={<Show />} />
            <Route path="ask" element={<Ask />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="profile" element={<Profile />} />
            <Route path="user/:id" element={<Profile />} />
            <Route path="item/:id" element={<Comments />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
