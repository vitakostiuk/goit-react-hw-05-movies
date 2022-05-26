import PropTypes from 'prop-types';
import s from './MovieCard.module.css';

export const MovieCard = ({ movie }) => {
  const {
    title,
    normalizedPoster,
    overview,
    normalizedGenres,
    normalizedYear,
    normalizedPopularity,
  } = movie;

  return (
    <div className={s.Wrapper}>
      <img src={normalizedPoster} alt={title} width="250" className={s.Img} />

      <div className={s.Thumb}>
        <h2>
          {title}({normalizedYear})
        </h2>
        <p className={s.Paragraf}>User score: {normalizedPopularity}</p>
        <h3 className={s.Subtitle}>Overview</h3>
        <p className={s.Paragraf}>{overview}</p>
        <h3 className={s.Subtitle}>Genres</h3>
        <p className={s.Paragraf}>{normalizedGenres}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    normalizedGenres: PropTypes.string,
    normalizedYear: PropTypes.number,
    normalizedPopularity: PropTypes.number,
  }).isRequired,
};
