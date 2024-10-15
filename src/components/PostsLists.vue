<template>
   <div class="posts-list" v-for="post in POSTS" :key="post.id">
      <PostItem :task="post" @postFromItem="postFromItem" />
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PostItem from '@/components/PostsLists.vue'

export default {
   components: {
      PostItem,
   },
   methods: {
      // Передача родительскому компоненту текста из задачи
      postFromItem(postFromItem) {
         this.$emit('postFromItem', postFromItem)
      },
   },
   computed: {
      ...mapGetters(['POSTS']),
   }
}
</script>

<style lang="scss" scoped>

</style>