<template>
  <div v-if="movie">
    <h2>{{ movie.title }} ({{ movie.year }})</h2>
    <img :src="movie.poster" alt="Poster" width="200" />
    <p>{{ movie.plot }}</p>
    <p><strong>Gemiddelde beoordeling:</strong> {{ movie.averageRating }}/5</p>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useMovieStore } from '@/store/movieStore';
import { useRoute } from 'vue-router';

const store = useMovieStore();
const route = useRoute();

onMounted(() => {
  store.fetchMovie(route.params.id);
});

const movie = computed(() => store.selectedMovie);
</script>

