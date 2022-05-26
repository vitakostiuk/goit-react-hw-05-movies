import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  return (
    <ul className={s.List}>
      {movies &&
        movies.map(({ id, normalizedTitle, normalizedPoster }) => (
          <Link to={`/movies/${id}`} key={id} className={s.Item}>
            <img
              src={normalizedPoster}
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

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// MovieCard.propTypes = {
//   movie: PropTypes.shape({
//     title: PropTypes.string,
//     poster_path: PropTypes.string,
//     overview: PropTypes.string,
//     normalizedGenres: PropTypes.string,
//     normalizedYear: PropTypes.number,
//     normalizedPopularity: PropTypes.number,
//   }).isRequired,
// };
