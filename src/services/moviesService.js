import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + "movies";

function movieUrl(id) {
    return `${apiEndpoint}/${id}`;
  }

export  async function  getMovies () {
    const movies = await http.get(apiEndpoint);
    return movies;
}

export async function getMovie(movieId) {
    const movie = await http.get(movieUrl(movieId));
    console.log(movie);
    return await http.get(movieUrl(movieId));
}