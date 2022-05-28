import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  // console.log(location);
  return (
    <ul className={s.List}>
      {movies &&
        movies.map(({ id, normalizedTitle, normalizedPoster }) => (
          <Link
            to={{ pathname: `/movies/${id}`, state: { from: location } }}
            key={id}
            className={s.Item}
          >
            <div className={s.Wrapper}>
              <img
                src={normalizedPoster}
                alt={normalizedTitle}
                width="150"
                height="225"
                className={s.Img}
              />
              <h2 className={s.Title}>{normalizedTitle}</h2>
            </div>
          </Link>
        ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      normalizedTitle: PropTypes.string,
      normalizedPoster: PropTypes.string,
      id: PropTypes.number,
    })
  ).isRequired,
};
