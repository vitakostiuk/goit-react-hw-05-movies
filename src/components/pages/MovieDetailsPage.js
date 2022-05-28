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
  const location = useLocation();

  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const [link] = useState(() => location?.state?.from);

  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  // console.log(history);
  // console.log(location.state.from);

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
    history.push(link);
  };

  return (
    <>
      {error && <div>{error.message}</div>}
      <Container>
        <GoToBack onClick={onClickGoBack} />
        {movie && <MovieCard movie={movie} />}
        <div className={s.Wrapper}>
          <NavLink
            to={{ pathname: `${url}/cast`, state: { from: location } }}
            className={s.Link}
            activeClassName={s.Active}
          >
            Cast
          </NavLink>
          <NavLink
            to={{ pathname: `${url}/reviews`, state: { from: location } }}
            className={s.Link}
            activeClassName={s.Active}
          >
            Reviews
          </NavLink>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path={`${path}/cast`}>
            <Cast />
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>
        </Suspense>
      </Container>
    </>
  );
};

export default MovieDetailsPage;
