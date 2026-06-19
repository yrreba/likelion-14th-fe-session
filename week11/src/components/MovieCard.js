import React from 'react';

function MovieCard({ movie }) {
  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={movie.title || movie.name} />
      <div className="card-hover-info">
        <h4>{movie.title || movie.name}</h4>
        <p>⭐ {movie.vote_average}</p>
      </div>
    </div>
  );
}

// React.memo로 감싸서 props가 변경되지 않으면 리렌더링을 건너뜀 (성능 최적화 힌트 반영!)
export default React.memo(MovieCard);