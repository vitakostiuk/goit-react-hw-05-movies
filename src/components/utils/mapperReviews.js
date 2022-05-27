export const mapper = reviews => {
  return reviews.map(({ author_details: { name, username }, content, id }) => {
    const normalizedName = name ? name : username;
    return { normalizedName, content, id };
  });
};
