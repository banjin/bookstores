// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Routers from './router'
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import progress from 'vue-progressbar'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.use(Vuex);
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(progress)
global.Vue = Vue


const RouterConfig = {
  mode: 'history',
  routes: Routers.routes
}

const router = new VueRouter(RouterConfig);
router.beforeEach((to, from, next) => {
  //Vue.prototype.$progress.start(3000)
  let token = localStorage.getItem('current_user') || sessionStorage.getItem('current_user')
  if (to.meta.auth && (!token || token === null)) { // need to auth but token is not set
    next('/login')
  }else{
    next()
  }
})

router.afterEach(() => {
  //Vue.prototype.$progress.finish()
  window.scrollTo(0, 0)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
