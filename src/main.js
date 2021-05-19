import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import {ruters} from './ruters'
import {store} from './store/store.js'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
  routes:ruters
})

new Vue({
  router:router,
  store:store,
  render: h => h(App),
}).$mount('#app')
