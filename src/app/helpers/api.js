const axios = require('axios');
const apiBase = process.env.API_BASE;
const apiKey = process.env.API_KEY;

module.exports.test = () => {
  return "Hey to youuu";
}
module.exports.search = (term, type, page=1) => {
  return axios.get(`${apiBase}/search/${type}?api_key=${apiKey}&language=en-US&include_adult=false&query=${encodeURI(term)}`);
}

module.exports.getConfig = () => {
  return axios.get(`${apiBase}/configuration?api_key=${apiKey}`);
}
module.exports.getMovie = (id) => {
  return axios.get(`${apiBase}/movie/${id}?api_key=${apiKey}&language=en-US`);
}
module.exports.getMovies =  (ids) => {
  return axios.all(ids.map((id) => (module.exports.getMovie(id))));
}
