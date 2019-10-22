import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:'',
    like:[],
    myself:''
  },
  mutations: {
    addUser(state,sex){
        state.user=sex;
    },
    addLike(state,like){
        state.like=like;
    },
    addMyself(state,myself){
        state.myself=myself;
    }
  },
  actions: {
  },
  modules: {
  }
})
