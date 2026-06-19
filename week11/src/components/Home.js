import React, { useState, useEffect } from 'react';
import MainBanner from './MainBanner';
import MovieSection from './MovieSection';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

function Home() {
  const [bannerMovie, setBannerMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ko-KR`)
      .then((res) => {
        if (!res.ok) throw new Error("데이터를 불러오는데 실패했습니다.");
        return res.json();
      })
      .then((data) => {

        setBannerMovie(data.results[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">로딩 중...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home">
      {/* 2. 메인 배너 */}
      {bannerMovie && <MainBanner movie={bannerMovie} />}

      <div className="sections-container">
        <MovieSection title="실시간 인기 콘텐츠" fetchUrl={`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=ko-KR`} />
        <MovieSection title="오직 넷플릭스에서" fetchUrl={`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213&language=ko-KR`} />
        <MovieSection title="블록버스터 영화" fetchUrl={`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR`} />
        <MovieSection title="지금 뜨는 대세 예능" fetchUrl={`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=ko-KR`} />
        <MovieSection title="평점이 높은 명작" fetchUrl={`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ko-KR`} />
      </div>
    </div>
  );
}

export default Home;