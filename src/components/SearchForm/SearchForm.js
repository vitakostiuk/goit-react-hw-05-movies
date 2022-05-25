import { MdOutlineSearch } from 'react-icons/md';
import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

export const SearchForm = ({ onSubmit }) => {
  const [filmName, setFilmName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(filmName);
    setFilmName('');
  };

  return (
    <form className={s.Form} onSubmit={handleSubmit}>
      <button type="submit" className={s.Button} aria-label="Search images">
        <MdOutlineSearch size="18" fill="#7a7a7a" />
      </button>

      <input
        className={s.Input}
        type="text"
        name="imgName"
        value={filmName}
        onChange={e => setFilmName(e.currentTarget.value.toLowerCase())}
        autoComplete="off"
        autoFocus
        placeholder="Search movies..."
      />
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
