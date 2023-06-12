import { Link } from 'react-router-dom';

const Home = () => {
  // may do http request

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
            <Link key={movie} to={`${'movies/movieID'}`}>
              {movie}
            </Link>
          );
        }
      )}
    </div>
  );
};

export default Home;
