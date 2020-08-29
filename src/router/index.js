import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomePage.vue'

const routes = [{
        path: '/',
        component: Home,
        meta: {
            title: '首页',
            requireAuth: true
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/ArticleEditor.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router