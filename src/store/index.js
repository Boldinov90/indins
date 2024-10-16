import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
   state: {
      posts: [],
   },
   mutations: {
      GET_ALL_POSTS(state, responsible) {
         state.posts = responsible.data
         // console.log(state.posts)
      }
   },
   actions: {
      async GET_ALL_POSTS({ commit }) {
         const responsible = await axios.get('http://localhost:3000/posts')
         commit('GET_ALL_POSTS', responsible)
         return responsible
      },
   },
   getters: {
      POSTS(state) {
         return state.posts
      }
   },
})
