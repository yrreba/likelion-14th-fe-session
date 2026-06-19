import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard'; 

function MovieSection({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => setMovies(data.results || []))
      .catch((err) => console.log(err));
  }, [fetchUrl]);

  return (
    <div className="movie-section">
      <h3>{title}</h3>
      <div className="movie-slider">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieSection;