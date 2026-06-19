import React, { useState } from 'react';
import Home from './Home';
import './App.css';

function App() {
  
  const [currentTab, setCurrentTab] = useState('home');

  return (
    <div className="app">
      
      <header className="header">
        <div className="logo">
    
          <button onClick={() => setCurrentTab('home')} className="logo-btn">wavve</button>
        </div>
        <nav className="nav-menu">
        
          <button onClick={() => setCurrentTab('home')} className={currentTab === 'home' ? 'active' : ''}>홈</button>
          <button onClick={() => setCurrentTab('drama')} className={currentTab === 'drama' ? 'active' : ''}>드라마</button>
          <button onClick={() => setCurrentTab('movie')} className={currentTab === 'movie' ? 'active' : ''}>영화</button>
          <button onClick={() => setCurrentTab('anime')} className={currentTab === 'anime' ? 'active' : ''}>애니메이션</button>
        </nav>
      </header>

    
      <main className="main-content">
        {currentTab === 'home' && <Home />}
        {currentTab === 'drama' && <div className="page-placeholder">드라마 페이지</div>}
        {currentTab === 'movie' && <div className="page-placeholder">영화 페이지</div>}
        {currentTab === 'anime' && <div className="page-placeholder">애니메이션 페이지</div>}
      </main>
    </div>
  );
}

export default App;