import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from '../pages/SplashPage'
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage' // 수정된 부분

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  )
}
