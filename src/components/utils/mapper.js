import emptyImg from '../../images/img_not_found.jpg';

export const mapper = movies => {
  return movies.map(({ id, title, name, poster_path }) => {
    const normalizedTitle = title ? title : name;
    let normalizedPoster = '';
    normalizedPoster = poster_path
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : emptyImg;

    return { id, normalizedTitle, normalizedPoster };
  });
};
