import { Navigation } from '../Navigation';
import { Container } from '../Container';
import s from './Header.module.css';

export const Header = () => {
  return (
    <div className={s.Header}>
      <Container>
        <Navigation />
      </Container>
    </div>
  );
};
