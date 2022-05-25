import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../../services/movies-api';
import { BookCard } from '../../BookCard';

export const MovieDetailsPage = () => {
  const params = useParams();
  console.log(params);
  // const { movieId } = useParams();

  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieInfo = async () => {
      try {
        let data = await fetchMovieById(params.movieId);
        console.log(data);
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

        setMovie({
          id,
          title,
          poster_path,
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
  }, [params.movieId]);

  const {
    title,
    poster_path,
    overview,
    normalizedGenres,
    normalizedYear,
    normalizedPopularity,
  } = movie;
  return (
    <>
      {movie && (
        <BookCard
          title={title}
          poster_path={poster_path}
          overview={overview}
          normalizedGenres={normalizedGenres}
          normalizedYear={normalizedYear}
          normalizedPopularity={normalizedPopularity}
        />
      )}
      {error && <div>Something went wrong</div>}
    </>
  );
};
