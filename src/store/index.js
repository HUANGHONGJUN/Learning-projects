import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartlist:[]
  },
  //尽量进行单一化操作，不要一起放在mutations做判断
  mutations: {
    addCount(state,payload){
      payload.count ++
    },
    addToCart(state,payload){
      state.cartlist.push(payload)
    }
  },
  actions: {
    addCart(context,payload){
      // state.cartlist.push(payload)
      //查询之前数组是否存在
      let oldproduct = context.state.cartlist.find(item => item.iid === payload.iid)

      //判断
      if (oldproduct) {
        context.commit("addCount",oldproduct)
      } else {
       payload.count = 1
      //  context.state.cartlist.push(payload)
       context.commit('addToCart',payload)
      }
    }
  },
  modules: {
  }
})
