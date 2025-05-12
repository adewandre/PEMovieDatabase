import { defineStore } from 'pinia';
import axios from 'axios';

export const useMovieStore = defineStore('movieStore', {
    state: () => ({
        movies: [],
        selectedMovie: null
    }),
    actions: {
        async fetchMovies() {
            const response = await axios.get('http://localhost:3000/movies');
            this.movies = response.data;
        },
        async fetchMovie(id) {
            const response = await axios.get(`http://localhost:3000/movies/${id}`);
            this.selectedMovie = response.data;
        }
    }
});
