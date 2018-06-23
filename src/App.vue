<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="contents">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import navBar from './components/navBar.vue'
  import BootstrapVue from 'bootstrap-vue'

  Vue.use(BootstrapVue);

  // using style-loader
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  export default {
    name: 'app',
    components : {
      navBar,
    }
  }
</script>

<style>
  .contents {
    margin-top: 30px;
  }
</style>
