<template>
   <div class="general-page">
      <PostsList />
   </div>
</template>

<script>
import TestComponent from "../components/TestComponent.vue";
import PostsList from "../components/PostsList.vue";


export default {
   components: {
      PostsList,
      TestComponent
   },
   computed: {

   },
   methods: {
      
   },
}
</script>

<style lang="scss" scoped>
.general-page{
   width: 100%;
   height: 100vh;
   background-color: rgb(211, 160, 72);
}
</style>