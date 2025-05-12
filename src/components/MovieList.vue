<template>
  <div>
    <h2>Movies</h2>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <router-link :to="'/movie/' + movie.id">
          <img :src="movie.poster" :alt="movie.title" width="100" />
          <p>{{ movie.title }} ({{ movie.year }})</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useMovieStore } from '@/store/movieStore';

const store = useMovieStore();

onMounted(() => {
  store.fetchMovies();
});

const movies = store.movies;
</script>
