import { FormLabel, FormText, SubmitButton, SearchForm } from './styled';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { handleMoviesSearch } from 'services/TmdbApi';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const SearchBar = () => {
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
  };

  const updateQueryString = event => {
    const movieIdValue = event.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    if (query.trim() === '') {
      alert('Empty line');
      setSearchParams({});
      return;
    }
    setSearchParams({ query: movieIdValue });
  };

  return (
    <div>
      {' '}
      <SearchForm onSubmit={handleSubmit}>
        <FormLabel>
          <FormText type="text" name="query" onChange={updateQueryString} />
        </FormLabel>
        <SubmitButton type="submit">Search</SubmitButton>
      </SearchForm>
      <MoviesList movies={movies} location={location} />
    </div>
  );
};

export default SearchBar;
