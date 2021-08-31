<template>
    <div class="category" ref="category">
       <nav-bar class="nav-bar">
           <div slot="center">商品分类</div>
           </nav-bar>
           <div class="content">
           <category-left-meue  :Category="category"/> 
           </div>
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import { getCetagory} from "../../network/categorty"
import CategoryLeftMeue from './categoryLeftMeue.vue'


export default {
    name:'category',
    components:{NavBar,  CategoryLeftMeue},
    data(){
        return {
            category:[]
        }
    },
    created(){
        getCetagory().then(res =>{
            console.log(res);
            const data = res.data
            this.category = data.category.list
            
        })
    }
   
}
</script>

<style scoped>
.category{
   height:100vh
}
.nav-bar{
    background-color: pink;
    font-weight: 700;
    color: rgb(7, 41, 41);
}
.content{
  display: flex;
  margin-top: 1px;
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>