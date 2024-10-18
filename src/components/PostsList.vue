<template>
   <div class="posts-list" v-if="!IS_LOADING">
      <div v-for="post in POSTS" :key="post.id">
         <PostItem :post="post" :contentPostTones="post.contentPostTones" />
      </div>
   </div>
   <div class="posts-loading">
      <img src="@/assets/loader.gif" class="posts-loading__gif" v-if="IS_LOADING" />
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PostItem from './PostItem.vue'

export default {
   components: {
      PostItem,
   },
   computed: {
      ...mapGetters(['POSTS', 'IS_LOADING', 'QUANTITY_POSTS', 'LENGTH_ARRAY'])
   },
   created() {
      window.addEventListener('scroll', this.handleScroll);
   },
   beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
   },
   methods: {
      ...mapActions(['CHANGE_IS_LOADING', 'INCREMENT_QUANTITY_POSTS', 'GET_POSTS']),
      handleScroll() {
         const scrollTop = window.scrollY;
         const windowHeight = window.innerHeight;
         const documentHeight = document.documentElement.scrollHeight;
         if (scrollTop + windowHeight == documentHeight && !this.IS_LOADING) {
            if (this.QUANTITY_POSTS <= this.LENGTH_ARRAY) {
               this.CHANGE_IS_LOADING(true).then(() => {
                  this.INCREMENT_QUANTITY_POSTS().then(() => {
                     this.GET_POSTS(this.QUANTITY_POSTS).then(() => {
                        setTimeout(() => {
                           this.CHANGE_IS_LOADING(false) // Сбрасываем флаг после завершения загрузки
                        }, 1000);
                     })
                  })
               })
            }
            if (this.QUANTITY_POSTS > this.LENGTH_ARRAY) {
               window.removeEventListener('scroll', this.handleScroll);
               this.CHANGE_IS_LOADING(true).then(() => {
                  this.INCREMENT_QUANTITY_POSTS().then(() => {
                     this.GET_POSTS(this.LENGTH_ARRAY).then(() => {
                        setTimeout(() => {
                           this.CHANGE_IS_LOADING(false)
                        }, 1000);
                     })
                  })
               })
            }
         }
      },
   },
}
</script>

<style lang="scss" scoped>
.posts-list {
   max-width: 1280px;
}
.posts-loading{
   position: fixed;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: -1 ;
   .posts-loading__gif{
         width: 60px;
         height: 60px;
   }
}
</style>