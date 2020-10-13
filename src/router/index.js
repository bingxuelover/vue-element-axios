import Vue from 'vue'
import VueRouter from 'vue-router'
import NoPage from '../views/404.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
        path: '/http',
        name: "Http",
        component: () => import('../views/Http.vue')
    },
    {
        path: '',
        name: '404',
        component: NoPage
    }
]

const router = new VueRouter({
    routes
})

export default router
