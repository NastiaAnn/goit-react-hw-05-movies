import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { useRef, Suspense, useState, useEffect } from 'react';
import { handleMoviesDetails } from 'services/TmdbApi';
import { MovieItem } from 'components/MovieItem/MovieItem';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 25px;
  font-weight: bold;

  :hover {
    color: orange;
  }
`;

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
      <StyledLink to={backLinkLocationRef.current}>Back to movies</StyledLink>
      <MovieItem movie={movie} />

      <ul>
        <li>
          <StyledLink to="cast">Cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">Reviews</StyledLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
