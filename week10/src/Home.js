import React, { useState, useEffect } from 'react';
import MovieSection from './MovieSection';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const API_KEY = "13c91b8cd779127629b1e85a93ff6c01";

  useEffect(() => {
    setLoading(true);
    
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('API 키가 올바르지 않거나 데이터를 가져오지 못했습니다.');
        }
        return res.json();
      })
      .then((data) => {

        if (data.results && data.results.length > 0) {
          setMovies(data.results);
        } else {
          throw new Error('가져올 영화 데이터가 없습니다.');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [API_KEY]);

  if (loading) return <div className="status-msg">웨이브 로딩 중...</div>;
  if (error) return <div className="status-msg error">{error}</div>;

  const bannerMovie = movies[0];

  return (
    <div className="home-container">
      {bannerMovie && (
        <div 
          className="main-banner"
          style={{
            backgroundImage: `linear-gradient(to top, #121212, rgba(0,0,0,0.3)), url(https://image.tmdb.org/t/p/original${bannerMovie.backdrop_path})`
          }}
        >
          <div className="banner-content">
            <h1>{bannerMovie.title}</h1>
            <p>{bannerMovie.overview ? bannerMovie.overview.slice(0, 120) + '...' : '내용 없음'}</p>
          </div>
        </div>
      )}


      <div className="sections-wrapper">
        <MovieSection title="믿고 보는 웨이브 에디터 추천작" movies={movies} />
        <MovieSection title="실시간 인기 콘텐츠" movies={movies.slice(5, 15)} />
        <MovieSection title="오직 웨이브에서" movies={movies.slice(2, 12)} />
        <MovieSection title="방영 중인 주간 예능" movies={movies.slice(8, 18)} />
        <MovieSection title="지금 시청률 급상승 영화" movies={movies.slice().reverse()} />
      </div>
    </div>
  );
}

export default Home;