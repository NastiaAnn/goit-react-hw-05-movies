import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { handleMoviesCast } from 'services/TmdbApi';
import { CastHeader, ActorName, Character, ActorsList } from './styled';

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
    <section style={{ height: '800px', overflow: 'auto' }}>
      <CastHeader>Cast of the film</CastHeader>
      <ActorsList>
        {searchedCast.map(({ id, name, character, profile_path }) => {
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
              <ActorName>{name}</ActorName>
              <Character>{character && `Character: ${character}`}</Character>
            </li>
          );
        })}
      </ActorsList>
    </section>
  );
};
export default Cast;
