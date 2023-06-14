import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Movies = () => {
  const movies = ['movie1', 'movie2', 'movie3', 'movie4', 'movie5', 'movie6'];
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const location = useLocation();

  const visibleMovies = movies.filter(movie => movie.includes(query));

  useEffect(() => {
    if (query === null) return;

    // Ваша асинхронна операція, наприклад HTTP-запит за інформацією про фільми
    async function fetchMovies() {
      // Виконайте тут ваші асинхронні дії
    }

    fetchMovies();
  }, [query]);

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
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="query" onChange={updateQueryString} />
        </label>
        <button type="submit">Search</button>
      </form>
      <ul>
        {visibleMovies.map(movie => (
          <li key={movie}>
            <Link to={`${movie}`} state={{ from: location }}>
              {movie}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
