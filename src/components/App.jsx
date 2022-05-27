import { lazy, Suspense } from 'react';
// import { BallTriangle } from 'react-loader-spinner';
import { Switch, Route } from 'react-router-dom';
import { Header } from './Header';
// import { HomePage } from './pages/HomePage';
// import { MoviesPage } from './pages/MoviesPage';
// import { MovieDetailsPage } from './pages/MovieDetailsPage';
// import { NotFound } from './pages/NotFound';

const HomePage = lazy(() =>
  import('./pages/HomePage.js' /* webpackChunkName: 'HomePage' */)
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage.js' /* webpackChunkName: 'MoviesPage' */)
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage.js' /* webpackChunkName: 'MovieDetailsPage' */
  )
);
const NotFound = lazy(() =>
  import('./pages/NotFound.js' /* webpackChunkName: 'NotFound' */)
);

export const App = () => {
  return (
    <div>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
};
