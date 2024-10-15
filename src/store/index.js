import { createStore } from 'vuex'

export default createStore({
   state: {
      data: []
   },
   getters: {
      DATA(state) {
         return state.data
      }
   },
   mutations: {
      GET_DATA(state, response) {
         state.tasks = response.data
      }
   },
   actions: {
      async GET_DATA({ commit }) {
         const response = await axios.get('http://localhost:3000/tasks')
         commit('GET_DATA', response)
         return response
      },
   },
})
