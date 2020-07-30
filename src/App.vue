<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/loop">Loop</router-link> |
      <router-link to="/next">Next</router-link> |
      <router-link to="/words">words</router-link>|
      <router-link to="/axios">axios</router-link>|
      <router-link to="/vuex">vuex</router-link> |
      <router-link to="/apicko">apicko</router-link> |
      <router-link to="/localStorage">localStorage</router-link> |
     
      
    </div>
    
    <!-- under this place are pages  -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
