import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { handleMoviesCast } from 'services/TmdbApi';

const Cast = () => {
  const [searchedCast, setSearchedCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const handleCredits = async id => {
      try {
        const searchedActors = await handleMoviesCast(id);
        setSearchedCast(searchedActors.data.cast);
      } catch (error) {
        console.log('Error');
      }
    };
    handleCredits(movieId);
  }, [movieId]);

  return (
    <section>
      <div>Cast of the film</div>
      <ul>
        {searchedCast.map(({ id, name, character, profile_path }) => {
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
              <div>{name}</div>
              <div>{character && `Character: ${character}`}</div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Cast;
