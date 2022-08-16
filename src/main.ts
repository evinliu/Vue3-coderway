import { createApp } from 'vue'
import { globalRegister } from './global'
import { store, setupStore, key } from './store'
import router from './router'
import App from './App.vue'

import SvgIcon from '@/components/svg-icon/index.vue'
import 'normalize.css'
import './assets/css/index.scss'
import './service/request'

import './icons'

const app = createApp(App)

app.use(store, key).use(router)
app.use(globalRegister)

app.component('svg-icon', SvgIcon)

const requireAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().map(requireContext)
const req = require.context('@/icons/svg', false, /\.svg$/)

requireAll(req)

app.mount('#app')

setupStore()
