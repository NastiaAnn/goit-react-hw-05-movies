import { useSearchParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { handleMoviesSearch } from 'services/TmdbApi';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { ColorRing } from 'react-loader-spinner';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoader, setIsLoader] = useState(false);
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (query === null) return;
    setIsLoader(true);
    getSearchedMovies(query);
  }, [query]);

  const getSearchedMovies = async query => {
    try {
      const searchedMovies = await handleMoviesSearch(query);
      setMovies(searchedMovies.data.results);
    } catch (error) {
      console.log('Error');
    } finally {
      setIsLoader(false);
    }
  };

  const handleSubmit = value => {
    if (value === '') {
      setSearchParams({});
      return;
    }
    if (value !== query) setMovies([]);
    setSearchParams({ query: value });
  };

  return (
    <div>
      <SearchBar handleFormSubmit={handleSubmit} />
      {isLoader && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
        />
      )}
      {movies.length === 0 && query !== '' && !isLoader && (
        <p>
          Oops... there are no images matching your result. Please try again.
        </p>
      )}

      <MoviesList movies={movies} location={location} />
    </div>
  );
};

export default Movies;
