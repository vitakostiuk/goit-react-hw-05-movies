import { Switch, Route } from 'react-router-dom';
import { Header } from './Header';
import { HomePage } from './pages/HomePage';
import { MoviesPage } from './pages/MoviesPage';
import { MovieDetailsPage } from './pages/MovieDetailsPage';
import { NotFound } from './pages/NotFound';

export const App = () => {
  return (
    <div>
      <Header />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};
