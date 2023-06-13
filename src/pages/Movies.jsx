import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const Movies = () => {
  // const [movie, setMovie] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    // Тут виконуємо асинхронну операцію,
    // наприклад HTTP-запит за інформацією про користувача
    if (query === '') return;

    // async function fetchUser() {
    //   const user = await FakeAPI.getUser(username);
    //   setUser(user);
    // }

    // fetchUser();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="query" />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default Movies;
