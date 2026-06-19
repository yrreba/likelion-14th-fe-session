import React from 'react';
import MovieSection from './MovieSection';

function Category({ title, fetchUrl }) {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const fullUrl = `https://api.themoviedb.org/3/${fetchUrl}?api_key=${API_KEY}&language=ko-KR`;

  return (
    <div className="category-page" style={{ padding: '80px 40px' }}>
      <h2 style={{ color: '#fff', marginBottom: '20px' }}>{title} 카테고리 결과</h2>
      <MovieSection title={`인기 있는 ${title}`} fetchUrl={fullUrl} />
    </div>
  );
}

export default Category;