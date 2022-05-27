import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../services/movies-api';
import { mapper } from '../utils/mapperActors';
import { ActorsList } from '../ActorsList';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getActorsInfo = async () => {
      try {
        let data = await fetchCast(movieId);
        setCredits([...mapper(data.cast)]);
      } catch (error) {
        setError(error);
      }
    };
    getActorsInfo();
  }, [movieId]);

  return (
    <>
      <ActorsList credits={credits} />
      {error && <div>{error.message}</div>}
    </>
  );
};

export default Cast;
