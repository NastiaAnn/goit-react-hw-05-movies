import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { useRef, Suspense, useState, useEffect } from 'react';
import { handleMoviesDetails } from 'services/TmdbApi';

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

  const { poster_path, original_title, overview, genres, release_date } = movie;
  return (
    <div>
      <Link to={backLinkLocationRef.current}>Back to movies</Link>
      <section>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
        />
        <div>
          {original_title} ({release_date && release_date.substring(0, 4)})
        </div>
        <div>User Score: </div>
        <div>Overview</div>
        <div>{overview}</div>
        <div>Genres</div>
        <div>
          {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </div>
      </section>

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
