import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrending } from '../services/movies-api';
import { MoviesList } from '../MoviesList';
import { Container } from '../Container';
import { mapper } from '../utils/mapper';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const getMoviesTrending = async () => {
      try {
        let data = await fetchTrending();
        setMovies([...mapper(data.results)]);
      } catch (error) {
        setError(error);
      }
    };
    getMoviesTrending();
  }, []);

  return (
    <Container>
      {error && <div>{error.message}</div>}
      <MoviesList movies={movies} location={location} />
    </Container>
  );
};

export default HomePage;
