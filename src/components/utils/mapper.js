export const mapper = movies => {
  return movies.map(({ id, title, name, poster_path }) => {
    const normalizedTitle = title ? title : name;
    return { id, normalizedTitle, poster_path };
  });
};
