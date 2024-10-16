<template>
   <div class="post-item">
      <div class="post-date">{{ item.authorName }}</div>
      <!-- <div class="author-name">{{ post.authorName }}</div>
      <div class="author-url">{{ post.authorUrl }}</div> -->
      <!-- <div class="content">{{ post.content }}</div> -->
      
   </div>
</template>

<script>

export default {
   props: {
      item: Object,
   },
   computed: {

   },
   methods: {

   }
}
</script>

<style lang="scss" scoped>
.post-item{
   width: 100%;
   height: 100px;
   // background-color: #762e2e;
}
</style>