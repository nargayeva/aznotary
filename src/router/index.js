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
                path: 'meslehet',
                name: 'meslehet',
                component: () => import('../views/Meslehet'),
            },
            {
                path: 'sual-cavab',
                name: 'sual-cavab',
                component: () => import('../views/SualCavab'),
            },
            {
                path: 'xerite',
                name: 'xerite',
                component: () => import('../views/Xerite'),
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

