import { useParams } from 'react-router-dom';
import { handleMoviesReviews } from 'services/TmdbApi';
import { useEffect, useState } from 'react';
import { ReviewHeader, AuthorName, Text, ReviewList } from './styled';

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
      {reviews.length === 0 && (
        <ReviewHeader>
          Sorry, we don't have any reviews for this film!
        </ReviewHeader>
      )}
      <ReviewList>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <AuthorName> Author: {author}</AuthorName>
              <Text>{content}</Text>
            </li>
          );
        })}
      </ReviewList>
    </section>
  );
};
export default Reviews;
