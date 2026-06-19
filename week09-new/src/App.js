import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function App() {
  // 로그인 상태 체크 (로컬스토리지 활용)
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 페이지 */}
        <Route path="/login" element={<Login />} />
        
        {/* 홈 페이지: 로그인 안 되어 있으면 /login으로 쫓아냄 (리디렉션) */}
        <Route 
          path="/home" 
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />} 
        />

        {/* 기본 주소 접속 시 로그인으로 강제 이동 */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;