import { useState, useEffect } from 'react';
import { fetchTrending } from '../services/movies-api';
import { MoviesList } from '../MoviesList';
import { Container } from '../Container';
import { mapper } from '../utils/mapper';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMoviesTrending = async () => {
      try {
        let data = await fetchTrending();
        setMovies(mapper(data.results));
      } catch (error) {
        console.log(error);
      }
    };
    getMoviesTrending();
  }, []);

  return (
    <Container>
      <MoviesList movies={movies} />
    </Container>
  );
};
