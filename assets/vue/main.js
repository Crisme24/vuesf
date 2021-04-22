import Vue from 'vue'
import App from './components/App'
import router from './router/index'
import store from './store/index'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue, IconsPlugin)

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

require('./store/subscriber')

store.dispatch('auth/attempt', localStorage.getItem('token')).then(()=>{
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
})
