import { useState, useEffect, lazy, Suspense } from 'react';
import {
  Route,
  useRouteMatch,
  NavLink,
  useParams,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { fetchMovieById } from '../services/movies-api';
import { MovieCard } from '../MovieCard';
import emptyImg from '../../images/img_not_found.jpg';
// import { Cast } from './Cast';
// import { Reviews } from './Reviews';
import { Container } from '../Container';
import { GoToBack } from '../GoToBack';
import s from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('./Cast.js' /* webpackChunkName: 'Cast' */));
const Reviews = lazy(() =>
  import('./Reviews.js' /* webpackChunkName: 'Reviews' */)
);

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  console.log(url);
  const history = useHistory();
  const location = useLocation();
  // console.log(history);
  console.log(location);

  useEffect(() => {
    const fetchMovieInfo = async () => {
      try {
        let data = await fetchMovieById(movieId);
        const {
          id,
          title,
          poster_path,
          overview,
          release_date,
          genres,
          popularity,
        } = data;
        const normalizedYear = new Date(release_date).getFullYear();
        const normalizedGenres = genres.map(genre => genre.name).join(', ');
        const normalizedPopularity = Math.round(popularity);
        let normalizedPoster = '';
        normalizedPoster = poster_path
          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
          : emptyImg;
        setMovie({
          id,
          title,
          normalizedPoster,
          overview,
          normalizedGenres,
          normalizedYear,
          normalizedPopularity,
        });
      } catch (error) {
        setError(error);
      }
    };
    fetchMovieInfo();
  }, [movieId]);

  const onClickGoBack = () => {
    history.push(location?.state?.from ?? '/movies');
  };

  return (
    <>
      {error && <div>{error.message}</div>}
      <Container>
        <GoToBack onClick={onClickGoBack} />
        {movie && <MovieCard movie={movie} />}
        <div className={s.Wrapper}>
          <NavLink
            to={`${url}/cast`}
            className={s.Link}
            activeClassName={s.Active}
          >
            Cast
          </NavLink>
          <NavLink
            to={`${url}/reviews`}
            className={s.Link}
            activeClassName={s.Active}
          >
            Reviews
          </NavLink>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path={`${path}/cast`}>
            <Cast location={location} />
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews location={location} />
          </Route>
        </Suspense>
      </Container>
    </>
  );
};

export default MovieDetailsPage;
