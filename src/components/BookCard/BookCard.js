import PropTypes from 'prop-types';
// import s from './BookCard.module.css';

export const BookCard = ({
  title,
  poster_path,
  overview,
  normalizedGenres,
  normalizedYear,
  normalizedPopularity,
}) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        width="150"
        height="225"
      />
      <h2>
        {title}({normalizedYear})
      </h2>
      <p>User score: {normalizedPopularity}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{normalizedGenres}</p>
    </div>
  );
};

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  normalizedGenres: PropTypes.string.isRequired,
  normalizedYear: PropTypes.number.isRequired,
  normalizedPopularity: PropTypes.number.isRequired,
};
