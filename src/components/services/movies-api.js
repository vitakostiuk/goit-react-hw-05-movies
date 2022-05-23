const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '3b4cb0b5c3c509ec710c203c7a14be66';

export const fetchTrending = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
  );
  console.log(response);
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(new Error(`Something went wrong`));
};

export const fetchMovieById = async id => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  console.log(response);
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(new Error(`Something went wrong`));
};
