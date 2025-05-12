<template>
  <div>
    <h3>Reviews</h3>
    <ul>
      <li v-for="review in reviews" :key="review.id">
        <p><strong>{{ review.rating }}/5</strong> - {{ review.comment }}</p>
      </li>
    </ul>
    <form @submit.prevent="addReview">
      <label>Jouw beoordeling (1-5):</label>
      <input v-model="newReview.rating" type="number" min="1" max="5" required />
      <label>Comment:</label>
      <textarea v-model="newReview.comment" required></textarea>
      <button type="submit">Review toevoegen</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const reviews = ref([]);
const newReview = ref({ rating: '', comment: '' });

onMounted(async () => {
  const response = await axios.get(`http://localhost:3000/reviews?movieId=${route.params.id}`);
  reviews.value = response.data;
});

const addReview = async () => {
  const review = {
    movieId: route.params.id,
    rating: parseInt(newReview.value.rating),
    comment: newReview.value.comment,
    createdAt: new Date().toISOString()
  };
  await axios.post('http://localhost:3000/reviews', review);
  reviews.value.push(review);
  newReview.value = { rating: '', comment: '' };
};
</script>

