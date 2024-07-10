import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import ChartsView from "@/views/ChartsView.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/charts',
        name: 'Charts',
        component: ChartsView
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
