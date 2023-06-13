import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();

  // may do http request
  console.log(movieId);
  return (
    <section>
      <div>Cast of the film</div>
    </section>
  );
};
export default Cast;
