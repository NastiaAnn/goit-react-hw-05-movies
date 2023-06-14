import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  // may do http request
  const location = useLocation();

  return (
    <div
      style={{
        display: 'flex',
        gap: '15px',
        flexDirection: 'column',
      }}
    >
      {['movie1', 'movie2', 'movie3', 'movie4', 'movie5', 'movie6'].map(
        movie => {
          return (
            <Link
              key={movie}
              to={`/movies/${movie}`}
              state={{ from: location }}
            >
              {movie}
            </Link>
          );
        }
      )}
    </div>
  );
};

export default Home;
