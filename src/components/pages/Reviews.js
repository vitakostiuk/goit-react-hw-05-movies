import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../services/movies-api';
import { mapper } from '../utils/mapperReviews';
import { ReviewsCard } from '../ReviewsCard';

export const Reviews = () => {
  const [reviews, setCredits] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getActorsInfo = async () => {
      try {
        let data = await fetchReviews(movieId);
        setCredits(mapper(data.results));
      } catch (error) {
        setError(error);
      }
    };
    getActorsInfo();
  }, [movieId]);

  return (
    <>
      <ReviewsCard reviews={reviews} />
      {error && <div>{error.message}</div>}
    </>
  );
};
