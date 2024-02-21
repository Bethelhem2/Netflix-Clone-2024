const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  requestMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchTvShow: `https://api.themoviedb.org/3tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests



