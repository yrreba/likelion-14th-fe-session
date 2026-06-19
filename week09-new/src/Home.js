import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate('/login');
    window.location.reload();
  };

  return (
    <div style={{ backgroundColor: '#141414', height: '100vh', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>환영합니다! 넷플릭스 홈 화면입니다.</h1>
      <button 
        onClick={handleLogout}
        style={{ backgroundColor: '#e50914', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer', marginTop: '20px', borderRadius: '4px' }}
      >
        로그아웃
      </button>
    </div>
  );
}

export default Home;