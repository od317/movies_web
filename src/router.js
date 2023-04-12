import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        path:'/',
        name:'home',
        component:()=> import('./views/home.vue')
    },
    {
        path:'/movies',
        name:'movies',
        component:()=> import('./views/movies.vue')
    },
    {
        path:'/series',
        name:'series',
        component:()=> import('./views/series.vue')
    },
    {
        path:'/movie/:title?',
        name:'movie',
        props: true,
        component:()=> import('./views/movie.vue')
    },
    {
        path:'/search',
        name:'search',
        props: true,
        component:()=> import('./views/search.vue')
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
});


export default router;
