<template>
  <nav>
    <router-link to="/">General</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #3d4349;
   }

   nav {
   padding: 30px;

   a {
      font-weight: bold;
      color: #3d4349;
      text-decoration: none;
      margin-left: 20px;
      margin-right: 20px;
      font-size: 10px;
      transition-duration: 0.3s;
      &.router-link-exact-active {
         color: #eda916;
         font-size: 15px;
      }
   }
}
</style>
