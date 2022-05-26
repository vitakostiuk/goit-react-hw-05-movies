import PropTypes from 'prop-types';
import s from './ReviewsCard.module.css';

export const ReviewsCard = ({ reviews }) => {
  if (reviews.length === 0) {
    return <p className={s.Title}>We don't have any reviews for this movie.</p>;
  }
  return (
    <ul className={s.List}>
      {reviews.map(({ author_details, content, id }) => (
        <li key={id} className={s.Item}>
          <p>
            <span className={s.Title}>Author: </span>
            {author_details.name}
          </p>
          <p className={s.Paragraf}>{content}</p>
        </li>
      ))}
    </ul>
  );
};

ReviewsCard.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
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
