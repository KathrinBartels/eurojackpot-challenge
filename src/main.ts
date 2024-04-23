import { createPinia } from 'pinia'
import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'

import 'virtual:uno.css'

const pinia = createPinia()

createApp({
  render: () => h(App)
})
  .use(router)
  .use(pinia)
  .mount('#app')
