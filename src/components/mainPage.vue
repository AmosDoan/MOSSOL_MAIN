<template>
  <div class="container theme-showcase" role="main">
    <div class="jumbotron">
      <h1>Mossol 시작하기</h1>
      <p>Internet이 연결된 모든 곳에서 Mossol을 시작하세요! </p>
      <p>
        <input type="button" class="btn btn-lg btn-default" id="desktop" value="Desktop PC" @click="$router.push('/start#desktop_guide')"/>
        <input type="button" class="btn btn-lg btn-primary" id="smartphone" value="Android iOS" @click="$router.push('/start#smartphone_guide')"/>
        <input type="button" class="btn btn-lg btn-warning" id="smarttv" value="Smart TV" @click="$router.push('/start#smarttv_guide')"/>
      </p>
    </div>
    <h1>Mossol에 오신것을 환영합니다!</h1>
    <p class="lead">환영합니다!</p>
  </div><!--/.container -->
</template>

<script>
    export default {
        name: "mainPage"
    }
</script>

<style scoped>

</style>
