import axios from "axios";
const movieBaseUrl = import.meta.env.VITE_REACT_APP_API_URL;
const api_key = import.meta.env.VITE_REACT_APP_API_KEY;

//Buscar os filmes mais procurados
const gettrendingVideos = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);

//Buscar genero
const baseURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key='
const generes = axios.get(`${baseURL}${api_key}`);

//buscar filmes pelo genero e ID
const movieByGenreBaseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=';

const getMovieByGenreID = async (id: number) => {
    const movies = await axios.get(`${movieByGenreBaseUrl}${api_key}&with_genres=${id}`);
    return movies
};
export default { gettrendingVideos, generes, getMovieByGenreID }