<template>
    <div id="home" >
        <nav-bar class="nav-bar-home" ><div slot="center">购物街</div></nav-bar> 
         <scroll class="content" ref="scroll"
         >
         <home-swiper :banner="banner"    />
         <home-recommend-view :recommends="recommends"/>
         <feature-view />
         <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"  />
         <goodslist :goods="goods[currenttype].list"/>     
        </scroll>
        <!-- 监听组件必须＋.native-->
         <backtop @click.native="backtop"  />
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import {getHomeMultidata} from 'network/homenetwork'
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from './childComps/HomeRecommendView.vue';
import FeatureView from './childComps/FeatureView.vue';
import TabControl from '../../components/content/tabControl/tabControl.vue';
import gethomegoods from 'network/homenetwork'
import Goodslist from '../../components/content/goods/Goodslist.vue';
import Backtop from '../../components/common/BackTop/Backtop.vue';
import Scroll from '../../components/common/scroll/Scroll.vue';
// import { itemImageListener, isShowBackTop } from "common/mixin";
export default {
  components: { 
      NavBar, 
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    Goodslist,
    Backtop,
    Scroll
  },
    name:'home',
    data() {
        return {
             banner:[],
             recommends:[],
             goods:{
                 //把请求下来的数据的页数放在page，内容放在list
                 'pop':{page:0,list:[]},
                 'new':{page:0,list:[]},
                 'sell':{page:0,list:[]}
             },
             currenttype:'pop'
        }
    },
    // mixins: [itemImageListener, isShowBackTop],
    computed: {
    // showGoods() {
    //   return this.goods[this.current].list;
    // },
  },
    created(){
        getHomeMultidata().then(res =>{
            console.log(res);
            this.banner = res.data.banner.list
            this.recommends = res.data.recommend.list
        })

        //请求多个商品数据
        this.gethomegoods('pop')
        this.gethomegoods('new')
        this.gethomegoods('sell')
    },
    methods:{
        //请求多个商品数据
        gethomegoods(type){
        const page = this.goods[type].page + 1
        gethomegoods(type,page).then(res =>{
            console.log(res);
            //数组添加
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1;


            // this.$refs.scroll.finishPullUp();
        })
        },
        
        //事件监听  通过得到title的index来改变商品属性（currenttype）从而改变goodsitem里面的内容
       tabClick(index){
           console.log(index);
           switch (index) {
               case 0:
                   this.currenttype = 'pop'
                   break;
                case 1:
                    this.currenttype = 'new'
                    break;
                case 2:
                    this.currenttype ='sell'
                    break;
               
           }
       },

       backtop(){
            this.$refs.scroll.scroll.scrollTo(0,0,500)
           console.log(this.$refs.scroll.scroll); 
       },

       
       


    }
}
</script>

<style scoped>

    .nav-bar-home{
        background: pink;
        color: aliceblue;
    }

    .tab-control{
        position: sticky;
        top: 44px;
    }
</style>