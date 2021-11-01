import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router'
import './service/axios_demo'

import { store } from '@/store'
import registerApp from '@/global'

const app = createApp(App)

// registerApp(app)

// 注册 element-plusy
app.use(registerApp)
app.use(router)
app.use(store)
app.mount('#app')
