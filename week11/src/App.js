import React, { useState } from 'react';
import Home from './components/Home';
import Category from './components/Category';
import './App.css';

function App() {

  const [view, setView] = useState('home');

  return (
    <div className="app">

      <header className="header">


<h1 className="logo" onClick={() => setView('home')}>WAVVE</h1>
        <nav className="nav-links">

          <span className={`nav-item ${view === 'entertainment' ? 'active' : ''}`} onClick={() => setView('entertainment')}>예능</span>
          <span className={`nav-item ${view === 'drama' ? 'active' : ''}`} onClick={() => setView('drama')}>드라마</span>
          <span className={`nav-item ${view === 'movie' ? 'active' : ''}`} onClick={() => setView('movie')}>영화</span>
        </nav>
      </header>

     
      <main className="main-content">
        {view === 'home' && <Home />}
        {view === 'entertainment' && <Category title="예능" fetchUrl="tv/popular" />}
        {view === 'drama' && <Category title="드라마" fetchUrl="tv/top_rated" />}
        {view === 'movie' && <Category title="영화" fetchUrl="movie/popular" />}
      </main>
    </div>
  );
}

export default App;