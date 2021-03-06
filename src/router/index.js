import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        components: require('../components/layouts/MainLayout'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('../views/Home'),
            },
            {
                path: 'nofer',
                name: 'nofer',
                component: () => import('../views/nofer'),
            },
            {
                path: 'ziya',
                name: 'ziya',
                component: () => import('../views/ziya'),
            },
            {
                path: 'ayxan',
                name: 'ayxan',
                component: () => import('../views/ayxan'),
            },
            {
                path: 'eli',
                name: 'eli',
                component: () => import('../views/eli'),
            },
            {
                path: 'shamxal',
                name: 'shamxal',
                component: () => import('../views/shamxal'),
            },
            {
                path: 'ozal',
                name: 'ozal',
                component: () => import('../views/ozal'),
            },
            {
                path: 'teymur',
                name: 'teymur',
                component: () => import('../views/teymur'),
            },
            {
                path: 'nicat',
                name: 'nicat',
                component: () => import('../views/nicat'),
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior () {
        window.scrollTo(0, 0)
    }
});

export default router;

