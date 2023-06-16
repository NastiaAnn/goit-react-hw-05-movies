import { Link } from 'react-router-dom';
import { MovieList, MovieName } from './styled';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  list-style: auto;

  :hover {
    color: orange;
  }
`;

export const MoviesList = ({ movies, location }) => {
  return (
    <MovieList>
      {movies.map(({ id, title }) => (
        <MovieName key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </StyledLink>
        </MovieName>
      ))}
    </MovieList>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
