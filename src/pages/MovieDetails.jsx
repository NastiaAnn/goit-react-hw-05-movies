import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { useRef, Suspense, useState, useEffect } from 'react';
import { handleMoviesDetails } from 'services/TmdbApi';
import { MovieItem } from 'components/MovieItem/MovieItem';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const handleDetails = async id => {
      try {
        const searchedMovie = await handleMoviesDetails(id);
        setMovie(searchedMovie.data);
      } catch (error) {
        console.log('Error');
      }
    };
    handleDetails(movieId);
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkLocationRef.current}>Back to movies</Link>
      <MovieItem movie={movie} />

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
