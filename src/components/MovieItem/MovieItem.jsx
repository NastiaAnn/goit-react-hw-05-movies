import {
  MovieSection,
  Heading,
  MovieName,
  OverviewText,
  DescriptionSection,
} from './styled';
import PropTypes from 'prop-types';

export const MovieItem = ({ movie }) => {
  const {
    poster_path,
    original_title,
    overview,
    genres,
    release_date,
    vote_average,
  } = movie;
  return (
    <MovieSection>
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={original_title}
      />
      <DescriptionSection>
        <MovieName>
          {original_title} ({release_date && release_date.substring(0, 4)})
        </MovieName>
        <Heading>
          User Score: {vote_average ? Math.floor(vote_average * 10) : '0'}%
        </Heading>
        <Heading>Overview</Heading>
        <OverviewText>{overview}</OverviewText>
        <Heading>Genres</Heading>
        <OverviewText>
          {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </OverviewText>
      </DescriptionSection>
    </MovieSection>
  );
};
MovieItem.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};
