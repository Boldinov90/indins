<template>
  <nav>
    <router-link to="/">ВАРИАНТ 1</router-link>
    <router-link to="/description">РЕАЛИЗАЦИЯ</router-link> 
  </nav>
  <router-view/>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
   computed: {
      ...mapGetters(['LENGTH_ARRAY', 'QUANTITY_POSTS']),
   },
   methods: {
      ...mapActions(['GET_POSTS', 'GET_LENGTH_ARRAY', 'INCREMENT_QUANTITY_POSTS']),
   },
   beforeMount() {
      this.GET_LENGTH_ARRAY().then(() => {
         this.INCREMENT_QUANTITY_POSTS()
         this.GET_POSTS(this.QUANTITY_POSTS)
      })
   },
}
</script>

<style lang="scss">
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   max-width: 1100px;
   padding: 0 20px;
   margin: 0 auto;
   position: relative;
   transition: 0.3s;
   }

   nav {
   padding: 30px;

   a {
      font-weight: bold;
      color: #3d4349;
      text-decoration: none;
      margin-left: 20px;
      margin-right: 20px;
      font-size: 15px;
      transition-duration: 0.3s;
      &.router-link-exact-active {
         color: #e99f00;
      }
   }
}
</style>
