import { useState, useEffect } from 'react';
import { SearchForm } from '../SearchForm';
import { movieSearch } from '../services/movies-api';
import { MoviesList } from 'components/MoviesList';
import { Container } from '../Container';
import { mapper } from '../utils/mapper';

export const MoviesPage = () => {
  const [filmName, setFilmName] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (filmName === '') return;

    const getSearchMovies = async () => {
      try {
        let data = await movieSearch(filmName);
        setMovies([...mapper(data.results)]);
      } catch (error) {
        setError(error);
      }
    };
    getSearchMovies();
  }, [filmName]);

  const onSearchFilmsSubmit = filmName => {
    setFilmName(filmName);
  };

  return (
    <Container>
      <SearchForm onSubmit={onSearchFilmsSubmit} />
      {movies && <MoviesList movies={movies} />}
      {error && <div>{error.message}</div>}
    </Container>
  );
};
