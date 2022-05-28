import { useState, useEffect } from 'react';
import { SearchForm } from '../SearchForm';
import { movieSearch } from '../services/movies-api';
import { MoviesList } from 'components/MoviesList';
import { Container } from '../Container';
import { useLocation, useHistory } from 'react-router-dom';
import { mapper } from '../utils/mapper';

const MoviesPage = () => {
  const [filmName, setFilmName] = useState(
    () => JSON.parse(localStorage.getItem('filmName')) ?? ''
  );
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const history = useHistory();
  // console.log(history);
  const location = useLocation();
  // console.log(location);

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
    window.localStorage.setItem('filmName', JSON.stringify(filmName));
  }, [filmName]);

  const onSearchFilmsSubmit = filmName => {
    history.push({ ...location, search: `query=${filmName}` });
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

export default MoviesPage;
