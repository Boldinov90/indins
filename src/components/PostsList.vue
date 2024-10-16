<template>
   <div class="posts-list">
      <div v-for="item in POSTS">
         <PostItem :item="item" />
      </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PostItem from './PostItem.vue'
import TestComponent from './TestComponent.vue';

export default {
   components: {
      PostItem,
      TestComponent,
   },
   computed: {
      ...mapGetters(['POSTS'])
   },
   methods: {


   }
}
</script>

<style lang="scss" scoped>
.posts-list {
   width: 500px;
   height: 500px;
   background-color: #fff;
}
</style>