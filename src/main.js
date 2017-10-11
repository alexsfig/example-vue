// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import CustomHead from './Header'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
new Vue({
  el: '#CustomHead',
  router,
  template: '<CustomHead/>',
  components: { CustomHead },
  //  mounted: function () {
  //   $(document).ready(function () {
  //     $('#sel').material_select()
  //   })
  // }
})
