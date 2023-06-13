import { Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  // may do http request
  console.log(movieId);

  return (
    <div>
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
      <Outlet />
    </div>
  );
};

export default MovieDetails;
