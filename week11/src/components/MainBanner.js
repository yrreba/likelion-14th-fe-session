import React, { useState } from 'react';

function MainBanner({ movie }) {
  
  const [activeIndex, setActiveIndex] = useState(0);
  const bannerImages = [
    `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
    `https://image.tmdb.org/t/p/original${movie.poster_path}`, 
    `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? bannerImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === bannerImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="main-banner" style={{ backgroundImage: `url(${bannerImages[activeIndex]})` }}>
      <div className="banner-overlay">
        <div className="banner-content">
          <h2>{movie.title || movie.name}</h2>
          <p>{movie.overview ? movie.overview.substring(0, 150) + "..." : "설명이 없습니다."}</p>
        </div>
      </div>

      <button className="banner-btn prev" onClick={handlePrev}>◀</button>
      <button className="banner-btn next" onClick={handleNext}>▶</button>


      <div className="indicators">
        {bannerImages.map((_, idx) => (
          <span key={idx} className={`dot ${idx === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(idx)}></span>
        ))}
      </div>
    </div>
  );
}

export default MainBanner;