import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();

  // may do http request
  console.log(movieId);
  return (
    <section>
      <div>Review of the film</div>
    </section>
  );
};
export default Reviews;
