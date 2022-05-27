import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from './GoToBack.module.css';

export const GoToBack = ({ onClick }) => (
  <Link to="" className={s.Back}>
    &#10094; Go back
  </Link>
);

GoToBack.propTypes = {
  onClick: PropTypes.func.isRequired,
};
