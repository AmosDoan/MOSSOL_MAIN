<template>

</template>

<script>
  import Vue from 'vue'
  import Router from 'vue-router'
  import mainPage from './mainPage.vue'
  import aboutPage from './aboutPage'
  import startPage from './startPage'

  Vue.use(Router);

  export default new Router({
    mode : 'history',
    scrollBehavior: function(to, from, savedPosition) {
        if (to.hash) {
            return {selector: to.hash}
        } else {
            return {x: 0, y: 0}
        }
    },
    routes: [
      {path: '/', component: mainPage},
      {path: '/about', component: aboutPage},
      {path: '/start', component: startPage}
    ]
  });
</script>

<style scoped>

</style>
