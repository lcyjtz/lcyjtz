import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import svtore from './store'
import vueComposition from '@vue/composition-api'

vue.use(vueComposition)
createApp(App).use(store).use(router).mount('#app')