const API_KEY = "c67b28f7d09258b49fa6ddf2f5eccb61";
  
const baseURL="https://api.themoviedb.org/3"

const request = {
    fetchNetflixOriginals:`${baseURL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchNetflixOriginalsPart2:`${baseURL}/discover/tv?api_key=${API_KEY}&with_networks=201`,
    fetchTrending:`${baseURL}/trending/all/day?api_key=${API_KEY}`,
    fetchTopRated:`${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchActionMovies:`${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchHorrorMovies:`${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies:`${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchUnknown:`${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=14`,
}
export default request;
