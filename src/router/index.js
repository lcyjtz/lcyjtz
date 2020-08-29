import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/ArticleEditor',
        name: 'ArticleEditor',
        component: () =>
            import ('../views/ArticleEditor.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router