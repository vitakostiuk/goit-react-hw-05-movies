import { useState, useEffect } from 'react';
import { fetchTrending } from '../../services/movies-api';
import { BookList } from '../../BookList';
import { mapper } from '../../utils/mapper';
// import s from './HomePage.module.css';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMoviesTrending = async () => {
      try {
        let data = await fetchTrending();
        console.log(data.results);
        setMovies(mapper(data.results));
      } catch (error) {
        console.log(error);
      }
    };
    getMoviesTrending();
  }, []);

  return (
    <>
      <BookList movies={movies} />
    </>
  );
};
