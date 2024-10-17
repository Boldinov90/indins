<template>
   <div class="variant-one-page">
      <PostsList />
   </div>
</template>

<script>
import PostsList from "../components/PostsList.vue";

export default {
   components: {
      PostsList,
   }
}
</script>

<style lang="scss" scoped>
.variant-one-page{
   width: 100%;
   height: 100vh;
}
</style>