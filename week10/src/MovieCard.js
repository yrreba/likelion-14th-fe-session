import React from 'react';

function MovieCard({ movie }) {
  // 요구사항 4: 포스터 이미지(poster_path) 사용
  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={movie.title} className="card-image" />
      <div className="card-info">
        <h4 className="card-title">{movie.title}</h4>
        <span className="card-rating">⭐ {movie.vote_average}</span>
      </div>
    </div>
  );
}

export default MovieCard;