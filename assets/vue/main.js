/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";
import store from "./store/index";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue, IconsPlugin)

Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1'


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
