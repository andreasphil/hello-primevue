import App from '@/App.vue'
import '@/assets/main.css'
import preset from '@/preset'
import router from '@/router'
import { PrimeVue } from '@primevue/core'
import { createApp } from 'vue'

const app = createApp(App)

app.use(router)

app.use(PrimeVue, {
  unstyled: true,
  pt: preset
})

app.mount('#app')
