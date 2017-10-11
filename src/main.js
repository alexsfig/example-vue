// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'
// Add validation in routes, use requiresAuth as meta en routes to validate access_token 
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (localStorage.access_token == null) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('YYYY/MM/DD')
  }
})
Vue.filter('formatDateTime', function(value) {
  if (value) {
    return moment(String(value)).format('YYYY/MM/DD/ hh:mm')
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
import VeeValidate from 'vee-validate';
Vue.component('modal', {
  template: '#modal'
})
Vue.use(VeeValidate);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

