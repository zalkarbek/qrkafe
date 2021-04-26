import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PinLayout from '@/layouts/PinLayout'
import TabloLayout from '@/layouts/TabloLayout'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: TabloLayout,
        children: [
            {
                path:'',
                name: 'Main',
                component: Home
            },
            {
                path: '/about',
                name: 'About',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
            }
        ]
    },
    {
        path: '/pin',
        component: PinLayout,
        children: [
            {
                path: '',
                name: 'Pin',
                component: () => import(/* webpackChunkName: "pin" */ '../views/Pin.vue')
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
