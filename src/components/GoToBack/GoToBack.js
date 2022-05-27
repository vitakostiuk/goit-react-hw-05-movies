import PropTypes from 'prop-types';

import s from './GoToBack.module.css';

export const GoToBack = ({ onClick }) => (
  <button type="button" className={s.Back} onClick={onClick}>
    &#10094; Go back
  </button>
);

GoToBack.propTypes = {
  onClick: PropTypes.func.isRequired,
};
