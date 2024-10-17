<template>
   <div class="post-item">
      <div class="post-item__description">
         <div class="description-date">{{ post.date }}</div> /
         <div class="description-author-name">{{ post.authorName }}</div> /
         <div class="description-author-url">{{ post.authorUrl }}</div>
      </div>
      <div class="post-item__content-wrapper">
         <div class="post-item__content">{{ post.content }}</div>
      </div>
      <div class="post-item__line"></div>
   </div>
</template>

<script>

export default {

   props: {
      post: Object,
   },
   computed: {

   },
   methods: {

   }
}
</script>

<style lang="scss" scoped>
.post-item{
   .post-item__description{
      display: flex;
      align-items: center;
      margin-bottom: 6px;
      .description-date{
         margin-right: 7px;
         font-size: 13px;
         color: rgb(91, 91, 91);
      }
      .description-author-name{
         margin-right: 7px;
         margin-left: 7px;
         font-weight: bold;
         color: rgb(88, 52, 34);
      }
      .description-author-url{
         margin-right: 7px;
         margin-left: 7px;
         font-size: 13px;
         color: rgb(91, 91, 91);
      }
   }
   .post-item__line{
      width: 100%;
      height: 1px;
      background-color: rgb(221, 221, 221);
      margin-bottom: 14px;
      margin-top: 14px;
   }
}
</style>