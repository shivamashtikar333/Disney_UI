import axios from 'axios'

const movieBaseUrl = 'https://api.themoviedb.org/3/movie/top_rated';
const api_key = 'bf347ff60a65b2bb47ea104c440fcc68'

const getTrendingMovies = axios.get(movieBaseUrl+'?api_key='+api_key);

const movieByGenreBaseURL =" https://api.themoviedb.org/3/discover/movie?api_key=bf347ff60a65b2bb47ea104c440fcc68&include_adult=false&include_video=false&sort_by=popularity.desc"
const getMovieByGenreId = (id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id);

export default{
    getTrendingMovies,
    getMovieByGenreId
}