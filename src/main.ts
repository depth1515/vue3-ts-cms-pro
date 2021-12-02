import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router'
import store, { setupStore } from '@/store'
import registerApp from '@/global'

import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)

// import '@/service/axios_demo'

// registerApp(app)

// 注册 element-plus
app.use(registerApp)
app.use(store)
setupStore()
app.use(router)
app.mount('#app')
