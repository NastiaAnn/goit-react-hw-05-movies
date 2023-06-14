import { Link } from 'react-router-dom';

export const TrendingMovies = ({ trendingMovies, location }) => {
  return trendingMovies.map(({ id, title }) => {
    return (
      <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    );
  });
};
