import PropTypes from 'prop-types';
import s from './ActorsList.module.css';

export const ActorsList = ({ credits }) => {
  return (
    <ul className={s.List}>
      {credits.map(({ name, character, normalizedPoster, id }) => (
        <li key={id} className={s.Item}>
          <img
            src={normalizedPoster}
            alt={character}
            width="150"
            height="225"
            className={s.Img}
          />
          <p className={s.Title}>{name}</p>
          <p>
            <span className={s.Title}>Character: </span>
            {character}
          </p>
        </li>
      ))}
    </ul>
  );
};

ActorsList.propTypes = {
  credits: PropTypes.arrayOf(
    PropTypes.shape({
      character: PropTypes.string,
      name: PropTypes.string,
      normalizedPoster: PropTypes.string,
      id: PropTypes.number,
    })
  ).isRequired,
};
