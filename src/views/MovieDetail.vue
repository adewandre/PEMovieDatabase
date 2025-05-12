<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const movie = ref<any>(null);

const fetchMovieDetails = async () => {
  try {
    const apiKey = "YOUR_OMDB_API_KEY";
    const response = await axios.get(
        `https://www.omdbapi.com/?i=${route.params.id}&apikey=${apiKey}`
    );
    movie.value = response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
};

onMounted(fetchMovieDetails);
</script>

<template>
  <div v-if="movie">
    <h1>{{ movie.Title }}</h1>
    <img :src="movie.Poster" :alt="movie.Title" />
    <p><strong>Year:</strong> {{ movie.Year }}</p>
    <p><strong>Genre:</strong> {{ movie.Genre }}</p>
    <p><strong>Plot:</strong> {{ movie.Plot }}</p>
  </div>
  <p v-else>Loading...</p>
</template>

<style scoped>
img {
  max-width: 300px;
  border-radius: 5px;
}
</style>
