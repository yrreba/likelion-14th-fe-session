import React from 'react';
import MovieCard from './MovieCard';

function MovieSection({ title, movies }) {
  console.log(`${title} 섹션 렌더링 확인`);

  return (
    <div className="movie-section">
      <h2 className="section-title">{title}</h2>
      <div className="slider-container">
        {movies && movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default React.memo(MovieSection);