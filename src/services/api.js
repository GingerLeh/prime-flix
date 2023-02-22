// Base da url: //https://api.themoviedb.org/3/
// url da api: movie/550?api_key=f64b75a3692b19fd128395e5777230a3&language=pt-BR
import axios from 'axios';


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});
export default api;