import { NavLink } from 'react-router-dom';
import { Navigation } from '../Navigation';
import { Container } from '../Container';
import s from './Header.module.css';

export const Header = () => {
  return (
    <div className={s.Header}>
      <Container>
        <NavLink to="/goback" className={s.Back}>
          &#10094; Go back
        </NavLink>
        <Navigation />
      </Container>
    </div>
  );
};
