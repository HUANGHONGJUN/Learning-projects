<template>
  <div class="category" ref="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <category-left-meue :Category="category" @itemindex="itemindex" />
      <scroll>
      <category-tab-content
        :subcategory="showSubcategory"
      ></category-tab-content>
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
      <category-detail :categoryDetail="showSubcategoryDetail" />
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import Scroll from '../../components/common/scroll/Scroll.vue';
import TabControl from '../../components/content/tabControl/tabControl.vue';
import { getCetagory, getSubcategory,getSubcategoryDetail } from "../../network/categorty";
import CategoryDetail from './categoryDetail.vue';
import CategoryLeftMeue from "./categoryLeftMeue.vue";
import CategoryTabContent from "./categoryTabContent.vue";

export default {
  name: "category",
  components: { NavBar, CategoryLeftMeue, CategoryTabContent, Scroll, TabControl, CategoryDetail },
  data() {
    return {
      category: [],
      categoryData: {},
      currentIndex: -1,
      currentType:"pop"
    };
  },
  computed: {
    showSubcategory() {
      //  erro 'subcategory' of undefined"
      /*
      这里涉及到 computed watch methos 的执行顺序
      如果有computed计算属性，页面在加载时，就会先执行一次computed里面的方法
      而这个时候页面还没加载完毕，created里面的网络请求还没有发送出去，所以subcategory是未定义的
      */
      // 所以这里需要加一层保险，去判断，如果 currentIndex = -1 就返回一个空对象
      if (this.currentIndex == -1) return {};
      return this.categoryData[this.currentIndex].subcategory;
    },
    showSubcategoryDetail(){
      if (this.currentIndex == -1) return [];
      return this.categoryData[this.currentIndex].categoryDetail[this.currentType]  
    }
  },
  methods: {
    //
    itemindex(index) {
      console.log(index);
      //这里将传过来的index传给subcategory
      this.getSubcategory(index);
    },

    getSubcategory(index) {
      this.currentIndex = index;
      //获取maitkey
      const maitKey = this.category[index].maitKey;
      getSubcategory(maitKey).then((res) => {
        console.log(res);
        this.categoryData[index].subcategory = res.data;
        //对象展开
         this.categoryData = { ...this.categoryData };
         this.getSubcategoryDetail("pop")
         this.getSubcategoryDetail("new")
         this.getSubcategoryDetail("sell")
      });
    },
    getSubcategoryDetail(type){
      const miniWallkey = this.category[this.currentIndex].miniWallkey
      getSubcategoryDetail(miniWallkey,type).then(res =>{
        this.categoryData[this.currentIndex].categoryDetail[type] = res;
        this.categoryData = { ...this.categoryData };
      })
    },

     tabClick(index){
       switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
       console.log(this.currentType);
     }
  },
  created() {
    //请求category数据
    getCetagory().then((res) => {
      console.log(res);
      const data = res.data;
      this.category = data.category.list;
      for (let i = 0; i < this.category.length; i++) {
        this.categoryData[i] = {
          subcategory: {},
           categoryDetail: {
             'pop': [],
             'new': [],
             'sell': [],
           },
        };
      }
      //请求第一个数据
      this.getSubcategory(0);
    });
  },
};
</script>

<style scoped>
.category {
  height: 100vh;
}
.nav-bar {
  background-color: pink;
  font-weight: 700;
  color: rgb(7, 41, 41);
}
.content {
  display: flex;
  margin-top: 1px;
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>