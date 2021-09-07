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
      //每当有商品加入按钮就默认为true 表示选中
      payload.checked = true
      state.cartlist.push(payload)
    },
  

  },
  actions: {
    addCart(context,payload){
      // state.cartlist.push(payload)
      //查询之前数组是否存在
      let oldproduct = context.state.cartlist.find(item => item.iid === payload.iid)

      //判断 添加商品的时候是否存在；之前存在就➕1，不存在就就添加进去 
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
