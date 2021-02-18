import Vue from 'vue';
import VueRouter from 'vue-router';
import main from '@/views/index';

import MainLayout from "@/layouts/MainLayout";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'main',
        component: main,
        meta: {
            layout: MainLayout
        }
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
