import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './BookList.module.css';

export const BookList = ({ movies }) => {
  return (
    <ul className={s.List}>
      {movies &&
        movies.map(({ id, normalizedTitle, poster_path }) => (
          <Link to={`/movies/${id}`} key={id} className={s.Item}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={normalizedTitle}
              width="150"
              height="225"
              className={s.Img}
            />
            <h2 className={s.Title}>{normalizedTitle}</h2>
          </Link>
        ))}
    </ul>
  );
};

BookList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
