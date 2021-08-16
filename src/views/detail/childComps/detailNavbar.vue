<template>
 <div class="detailNavbar">
     <nav-bar>
         <div slot="left" class="left">
             <img src="~assets/img/common/back.svg" alt="" @click="backclick">
         </div>
         <div slot="center" class="title">
             <div class="detail-item" v-for="(item,index) in titles" :key="index" :class="{active:index === currentindex}" @click="titleclick(index)">{{item}}</div>
         </div>
     </nav-bar>
     
</div>  
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar.vue'


export default {
  components: { NavBar },
    name:'detailNavbar',
    data(){
        return {
            titles:['商品','参数','评论','推荐'],
            currentindex:0
        }
    },
    methods:{
        titleclick(index){
            this.currentindex = index
        },
        backclick(){
            this.$router.back()
        }
    },
    
    
}
</script>

<style scoped>
.detailNavbar{
    border-bottom: 2px solid black;
    text-align: center;
}
.title{
    display: flex;
}
.detail-item{
    flex: 1;
}
.active{
    color: pink;
}
.left{
    margin-top: 5px;
}
</style>