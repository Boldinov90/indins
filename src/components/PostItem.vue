<template>
   <div class="post-item">
      <div class="post-date">{{ task.date }}</div>
      <div class="author-name"></div>
      <div class="author-url"></div>
      <div class="content"></div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
   props: {
      task: Object,
   },
   computed: {
      ...mapGetters(['ACTIVE_TASK_NAV']),
   },
   methods: {
      // ...mapActions([
      //    'DELETE_TASK',
      //    'COUNT_TASKS',
      //    'CHANGE_TASK_STATUS',
      //    'TOGGLE_IS_FORM_CHANGE_TASK_OPEN',
      //    'FILTER_TASKS',
      // ]),
   }
}
</script>

<style lang="scss" scoped>

</style>