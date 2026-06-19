import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // 스타일은 여기서 불러와

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // 1. 로그인 성공 기록 저장
    localStorage.setItem("isLoggedIn", "true");
    // 2. 홈으로 이동
    navigate('/home');
    // 3. 상태 반영을 위해 새로고침 (가장 확실한 방법)
    window.location.reload();
  };

  return (
    <div className="background">
      <div className="overlay">
        <header>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="logo" />
        </header>

        <div className="login-box">
          <h1>로그인</h1>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="이메일 주소 또는 휴대폰 번호" required />
            <input type="password" placeholder="비밀번호" required />
            <button type="submit" class="login-btn">로그인</button>
            
          </form>

          <div className="footer-text">
            <p>Netflix 회원이 아닌가요? <a href="#">지금 가입하세요.</a></p>
            <p className="captcha">이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;