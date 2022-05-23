// import { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { fetchMovieById } from '../../services/movies-api';
// import s from './MovieDetailsPage.module.css';

// export const MovieDetailsPage = () => {
//   // const params = useParams();
//   // console.log(params);
//   const { movieId } = useParams();

//   const [movie, setMovie] = useState({});
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMovieInfo = async () => {
//       try {
//         let data = await fetchMovieById(movieId);
//         console.log(data);
//         const { id, title, name, poster_path, overview, genres } = data;
//         const normalizedTitle = title ? title : name;
//         setMovie({ id, normalizedTitle, poster_path, overview, genres });
//       } catch (error) {
//         setError(error);
//       }
//     };
//     fetchMovieInfo();
//   }, [movieId]);

//   const { poster_path, normalizedTitle, overview, genres } = movie;
//   return (
//     <>
//       {movie && (
//         <div>
//           <img
//             src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
//             alt={normalizedTitle}
//             width="150"
//             height="225"
//             className={s.Img}
//           />
//           <h2 className={s.Title}>{normalizedTitle}</h2>
//           <h3>Overview</h3>
//           <p>{overview}</p>
//           <h3>Genres</h3>
//           {/* {genres.map(genre => (
//             <p>{genre.name}</p>
//           ))} */}
//         </div>
//       )}
//       {error && <div>Something went wrong</div>}
//     </>
//   );
// };
