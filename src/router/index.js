import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import BarChart from "@/views/BarChart.vue";
import DonutChart from "@/views/DonutChart.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/bar-chart',
        name: 'Bar Chart',
        component: BarChart
    }, {
        path: '/donut-chart',
        name: 'Donut Chart',
        component: DonutChart
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
