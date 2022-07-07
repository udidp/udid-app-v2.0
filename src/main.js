import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

import I18n from './i18n'

import './assets/style/tailwind.css'
import './assets/style/global.less'

const store = createPinia()

createApp(App).use(store).use(router).use(I18n).mount('#app')
