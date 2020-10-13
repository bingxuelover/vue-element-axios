<template>
  <div id="app">
    <router-link to="/">home</router-link>
    <img alt="Vue logo" src="./assets/logo.png" width="50" />
    <router-link to="http">http</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "App",
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
