const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '3b4cb0b5c3c509ec710c203c7a14be66';

const fetchWithErrorHandling = async (url = '', config = {}) => {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error(`Something went wrong`));
};

export const fetchTrending = () => {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
};

export const fetchMovieById = id => {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
};

export const movieSearch = searchQuery => {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );
};

export const fetchCast = id => {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
};

export const fetchReviews = id => {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
};
