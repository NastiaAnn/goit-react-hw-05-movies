import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { useRef, Suspense } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  // may do http request
  console.log(movieId);

  return (
    <div>
      <Link to={backLinkLocationRef.current}>Back to movies</Link>
      <div>Header</div>
      <div>Image</div>
      <div>Description</div>
      <div>Add info</div>

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
