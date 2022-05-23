import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from '../../services/movies-api';
import { mapper } from '../../utils/mapper';
import s from './HomePage.module.css';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMoviesTrending = async () => {
      try {
        let data = await fetchTrending();
        console.log(data);
        setMovies(mapper(data.results));
      } catch (error) {
        console.log(error);
      }
    };
    getMoviesTrending();
  }, []);

  return (
    <ul className={s.List}>
      {movies &&
        movies.map(({ id, normalizedTitle, poster_path }) => (
          <Link to={`/movies/${id}`} key={id} className={s.Item}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={normalizedTitle}
              width="150"
              height="225"
              className={s.Img}
            />
            <h2 className={s.Title}>{normalizedTitle}</h2>
          </Link>
        ))}
    </ul>
  );
};
