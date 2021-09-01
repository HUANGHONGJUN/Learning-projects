<template>
<div class="tabContent">
     <div class="content">
         <div class="item" v-for="(item,index) in subcategory.list" :key="index">
             <a :href="item.link" class="item-link">
                 <img :src="item.image" alt="" class="item-img">
                 <p class="text">{{item.title}}</p>
             </a>
         </div>
     </div>
</div>  
</template>

<script>
export default {
    name:'categoryTabContent',
    props:{
        subcategory:{
            type:Object,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.tabContent{
    padding:  15px 15px 0;
}
.content {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  padding-bottom: 30px;
  border-bottom: 1px solid #e5e5e5;
}
.tabContent .item{
    margin-top: 10px;
    text-align: center;
}
.item-link {
    display: inline-block;
    width: 100%;
}
.tabContent .item-img {
    width: 60%;
}

</style>