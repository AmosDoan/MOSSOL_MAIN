import Vue from 'vue'
import App from './App.vue'
import router from './components/router.vue'

new Vue({
  el: '#app',
  router: router,
  render: function (createElement) {
      return createElement(App);
  }
})
