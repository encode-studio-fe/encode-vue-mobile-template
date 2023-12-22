import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import { createRouterScroller } from 'vue-router-better-scroller'
import App from './App.vue'
import router from './router'

import 'virtual:uno.css'

import './app.less'

import '@vant/touch-emulator'

import 'vant/es/dialog/style'
import 'vant/es/image-preview/style'
import 'vant/es/notify/style'
import 'vant/es/toast/style'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(pinia)

app.use(createRouterScroller({
  selectors: {
    'window': true,
    'body': true,
    '.scrollable': true,
  },
}))

app.mount('#app')
