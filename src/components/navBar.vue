<template>
  <div>
    <b-navbar type="dark" variant="dark" toggleable>
      <b-navbar-brand>{{title}}</b-navbar-brand>
      <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_dropdown_collapse">
        <b-navbar-nav>
          <b-nav-item b-link to="/">Home</b-nav-item>
          <b-nav-item b-link to="about">About</b-nav-item>
          <b-nav-item b-link to="start">Start</b-nav-item>
          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Contents" right>
            <b-dropdown-item href="http://av.mossol.net">Video</b-dropdown-item>
            <b-dropdown-item href="http://music.mossol.net">Audio</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: "navBar",
    data: function() {
      return { title : "MOSSOL TOWN"};
    }
  }
</script>

<style scoped>

</style>
