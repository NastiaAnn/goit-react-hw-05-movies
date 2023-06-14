import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovies } from 'services/TmdbApi';
import { TrendingMovies } from 'components/TrendingMovies/TrendingMovies';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getMovies();
        setTrendingMovies(movies.data.results);
      } catch (error) {
        console.log('Error');
      }
    };
    fetchMovies();
  }, []);

  const location = useLocation();

  return (
    <div
      style={{
        display: 'flex',
        gap: '15px',
        flexDirection: 'column',
      }}
    >
      <TrendingMovies trendingMovies={trendingMovies} location={location} />
    </div>
  );
};

export default Home;
