import PropTypes from 'prop-types';
import s from './ReviewsCard.module.css';

export const ReviewsCard = ({ reviews }) => {
  if (reviews.length === 0) {
    return <p className={s.Title}>We don't have any reviews for this movie.</p>;
  }
  return (
    <ul className={s.List}>
      {reviews.map(({ normalizedName, content, id }) => (
        <li key={id} className={s.Item}>
          <p>
            <span className={s.Title}>Author: </span>
            {normalizedName}
          </p>
          <p className={s.Paragraf}>{content}</p>
        </li>
      ))}
    </ul>
  );
};

ReviewsCard.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      id: PropTypes.string,
      normalizedName: PropTypes.string,
    })
  ).isRequired,
};
