import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={s.Navigation}>
      <NavLink exact to="/" className={s.Link} activeClassName={s.Active}>
        Home
      </NavLink>
      <NavLink to="/movies" className={s.Link} activeClassName={s.Active}>
        Movies
      </NavLink>
    </nav>
  );
};
