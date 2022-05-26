const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '3b4cb0b5c3c509ec710c203c7a14be66';

export const fetchTrending = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(new Error(`Something went wrong`));
};

export const fetchMovieById = async id => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(new Error(`Not found`));
};

export const movieSearch = async searchQuery => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(new Error(`Not found`));
};

export const fetchCast = async id => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(new Error(`Not found`));
};

export const fetchReviews = async id => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(new Error(`Not found`));
};
