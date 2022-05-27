import { useState, useEffect } from 'react';
import { Route, useRouteMatch, NavLink, useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/movies-api';
import { MovieCard } from '../MovieCard';
import emptyImg from '../../images/img_not_found.jpg';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { Container } from '../Container';
import s from './MovieDetailsPage.module.css';

export const MovieDetailsPage = () => {
  // const params = useParams();
  // console.log(params);
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  const { url, path } = useRouteMatch();

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

  return (
    <>
      {error && <div>{error.message}</div>}
      <Container>
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
        <Route path={`${path}/cast`}>
          <Cast />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews />
        </Route>
      </Container>
    </>
  );
};
