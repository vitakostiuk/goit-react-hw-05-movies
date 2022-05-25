import { useState } from 'react';
import { SearchForm } from '../../SearchForm';

export const MoviesPage = () => {
  const [filmName, setFilmName] = useState('');

  const onSearchFilmsSubmit = filmName => {
    setFilmName(filmName);
  };

  return <>{filmName && <SearchForm onSubmit={onSearchFilmsSubmit} />}</>;
};
