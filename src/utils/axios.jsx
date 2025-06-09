import axios from 'axios';

const instance = axios.create(
    {
        baseURL : "https://api.themoviedb.org/3/",
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjFmZjA4NDRkNTc3YmY0ZDU1NGRhMjkyN2I4MTAwNCIsIm5iZiI6MTcyNjY3OTcyNC45ODYxNTYsInN1YiI6IjY2ZWIwOTNiYjI5MTdlYjE4MDBiYzgyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eGsEsm2LBWDcINha_pJ17Irq7GH3oUNyycv46io3jWA'
          },
        
    }
);

export default instance;

