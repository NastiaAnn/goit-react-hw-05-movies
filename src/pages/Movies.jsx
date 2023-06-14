import { useSearchParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { handleMoviesSearch } from 'services/TmdbApi';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (query === null) return;

    getSearchedMovies(query);
  }, [query]);

  const getSearchedMovies = async query => {
    try {
      const searchedMovies = await handleMoviesSearch(query);
      setMovies(searchedMovies.data.results);
    } catch (error) {
      console.log('Error');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  const updateQueryString = event => {
    const movieIdValue = event.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: movieIdValue });
  };

  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} updateString={updateQueryString} />
      <MoviesList movies={movies} location={location} />
    </div>
  );
};

export default Movies;
