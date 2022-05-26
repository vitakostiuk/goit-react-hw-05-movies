export const mapper = reviews => {
  return reviews.map(({ author_details, content, id }) => {
    return { author_details, content, id };
  });
};
