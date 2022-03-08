import http from './httpService';
import config from '../config.json';

export  async function  getMovies () {
 const movies = await http.get(config.apiUrl + 'movies');
 return movies;
}