<template>
  <div id="app">

    <router-link to="/" exact>Home</router-link> |
        <router-link to="/about">About</router-link>
        
      <router-view/>

  </div>

</template>
<!-- eslint-disable vue/no-unused-components -->

<script>
export default {}
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


.router-link-active{
  color:orange
}
</style>
