<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
  </div>
  
</template>

<script>
import MainTabBar from './components/content/maintabbar/MainTabBar.vue'
// import MainTabBar from './components/content/maintabbar/MainTabBar.vue'
// import TabBar from './components/content/Tabbar/Tabbar.vue'
// import TabBaritem from './components/content/Tabbar/Tabbaritem.vue'
// import {request} from './newwork/request'

export default {
  name: 'App',
  components: {
    MainTabBar
  },
  
  created(){
    //第一种方法调用request
    // request({
    //     url: '.....'
    // },res=>{
    //     console.log(res);
    // },err =>{
    //     console.log(err);
    // })
  }
}
</script>

<style>
@import url('~assets/css/base.css');
 body{
   margin: 0;
   padding: 0;
 }
 
</style>
