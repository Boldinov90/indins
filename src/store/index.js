import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
   state: {
      posts: [],
      isLoading: false,
      quantityPosts: 0,
      getLengthArray: 0,
   },
   mutations: {
      GET_POSTS(state, responsible) {
         state.posts = responsible.data
      },
      GET_LENGTH_ARRAY(state, getLengthArray) {
         state.getLengthArray = getLengthArray.data.length
         // console.log(getLengthArray.data)
      },
      CHANGE_IS_LOADING(state, bool) {
         state.isLoading = bool
      },
      INCREMENT_QUANTITY_POSTS(state) {
         state.quantityPosts = state.quantityPosts + 10
      }
   },
   actions: {
      async GET_LENGTH_ARRAY({ commit }) {
         const getLengthArray = await axios.get('http://localhost:3000/posts')
         commit('GET_LENGTH_ARRAY', getLengthArray)
         return getLengthArray
      },
      async GET_POSTS({ commit }, quantity) {
         const responsible = await axios.get(`http://localhost:3000/posts?_limit=${quantity}`)
         commit('GET_POSTS', responsible)
         return responsible
      },
      CHANGE_IS_LOADING({ commit }, bool) {
         commit('CHANGE_IS_LOADING', bool)
      },
      INCREMENT_QUANTITY_POSTS({ commit }) {
         commit('INCREMENT_QUANTITY_POSTS')
      },
   },
   getters: {
      LENGTH_ARRAY(state) {
         return state.getLengthArray
      },
      POSTS(state) {
         return state.posts
      },
      QUANTITY_POSTS(state) {
         return state.quantityPosts
      },
      IS_LOADING(state) {
         return state.isLoading
      }
   },
})
