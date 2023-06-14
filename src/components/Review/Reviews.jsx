import { useParams } from 'react-router-dom';
import { handleMoviesReviews } from 'services/TmdbApi';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const handleReviews = async id => {
      try {
        const searchedReviews = await handleMoviesReviews(id);
        console.log(searchedReviews.data.results);
        setReviews(searchedReviews.data.results);
      } catch (error) {
        console.log('Error');
      }
    };
    handleReviews(movieId);
  }, [movieId]);

  return (
    <section>
      <div>Review of the film</div>
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <div> Author: {author}</div>
              <div>{content}</div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Reviews;
