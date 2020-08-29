import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueComposition from '@vue/composition-api'

Vue.use(VueComposition)
createApp(App).use(store).use(router).mount('#app')