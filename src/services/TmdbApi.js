import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const APIKEY = 'b2f603dc7bfb8f273c9f4e293e842183';

export const getMovies = async () => {
  return await axios.get(`trending/all/day?api_key=${APIKEY}&language=en-US`);
};

export const handleMoviesSearch = async query => {
  return await axios.get(
    `search/movie?api_key=${APIKEY}&language=en-US&query=${query}&page=1`
  );
};

export const handleMoviesDetails = async id => {
  return await axios.get(`/movie/${id}?api_key=${APIKEY}&language=en-US`);
};

export const handleMoviesCast = async id => {
  return await axios.get(
    `/movie/${id}/credits?api_key=${APIKEY}&language=en-US`
  );
};

export const handleMoviesReviews = async id => {
  return await axios.get(
    `/movie/${id}/reviews?api_key=${APIKEY}&language=en-US&page=1`
  );
};
