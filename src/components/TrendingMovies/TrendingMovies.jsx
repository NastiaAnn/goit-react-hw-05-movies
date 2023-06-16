import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TrendingMovieList, TrendingMovieName } from './styled';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  list-style: auto;
  font-size: 20px;
  font-weight: normal;

  :hover {
    color: orange;
  }
`;

export const TrendingMovies = ({ trendingMovies, location }) => {
  return (
    <TrendingMovieList>
      {trendingMovies.map(({ id, title, name }) => {
        return (
          <TrendingMovieName key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              {title || name}
            </StyledLink>
          </TrendingMovieName>
        );
      })}
    </TrendingMovieList>
  );
};

TrendingMovies.propTypes = {
  trendingMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
