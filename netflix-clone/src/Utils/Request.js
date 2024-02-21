const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  requestMovies: ` https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1`
   
};
export default requests



// 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1'
