import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueAwesomePaginate from "vue-awesome-paginate";

const app = createApp(App)
const pinia = createPinia();

pinia.use(({ store }) => {
    store.router = markRaw(router);
})

app.use(pinia)
app.use(router)
app.use(VueAwesomePaginate)
app.mount('#app')
