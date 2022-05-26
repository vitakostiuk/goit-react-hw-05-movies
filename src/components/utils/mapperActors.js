import emptyImg from '../../images/img_not_found.jpg';

export const mapper = credits => {
  return credits.map(({ name, character, profile_path, id }) => {
    let normalizedPoster = '';
    normalizedPoster = profile_path
      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
      : emptyImg;

    return { name, character, normalizedPoster, id };
  });
};
