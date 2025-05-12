<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

const movies = ref<Movie[]>([]);
const searchQuery = ref("Batman"); // Default search term

const fetchMovies = async () => {
  try {
    const apiKey = "6b7c1638"; // Replace with your OMDb API key
    const response = await axios.get(
        `https://www.omdbapi.com/?s=${searchQuery.value}&apikey=${apiKey}`
    );

    if (response.data.Search) {
      movies.value = response.data.Search;
    } else {
      movies.value = [];
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

onMounted(fetchMovies);
</script>

<template>
  <div class="movie-list">
    <h1 class="title">Movie List</h1>

    <input v-model="searchQuery" placeholder="Search movies..." @keyup.enter="fetchMovies" class="search-bar" />

    <div v-if="movies.length" class="movie-grid">
      <div v-for="movie in movies" :key="movie.imdbID" class="movie-card">
        <img :src="movie.Poster" :alt="movie.Title" class="poster" />
        <h2>{{ movie.Title }}</h2>
        <p>{{ movie.Year }}</p>
        <router-link :to="`/movie/${movie.imdbID}`" class="details-link">View Details</router-link>
      </div>
    </div>

    <p v-else>No movies found.</p>
  </div>
</template>

<style scoped>
.movie-list {
  text-align: center;
  padding: 20px;
}

.title {
  font-size: 2rem;
  margin-bottom: 15px;
}

.search-bar {
  padding: 10px;
  width: 300px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
}

.movie-card {
  background: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.poster {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.details-link {
  display: inline-block;
  margin-top: 10px;
  color: blue;
  text-decoration: none;
}
</style>
