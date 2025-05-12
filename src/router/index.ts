import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import MovieList from '@/views/MovieList.vue';
import MovieDetail from '@/views/MovieDetail.vue';

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/movies', name: 'Movies', component: MovieList },
    { path: '/movie/:id', name: 'MovieDetail', component: MovieDetail, props: true },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
