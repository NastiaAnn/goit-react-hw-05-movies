import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovies } from 'services/TmdbApi';

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
      {trendingMovies.map(({ id, title }) => {
        return (
          <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
