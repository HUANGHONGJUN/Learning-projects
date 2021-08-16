<template>
    <div class="category" ref="category">
       <h1>分类</h1> 
       <ul class="content">
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶</li>
           <li>得闲饮茶1</li>
           <li>得闲饮茶</li>
       </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'


export default {
    name:'category',
    data(){
        return {
            scroll : null
        }
    },
   mounted(){
       this.scroll = new BScroll(document.querySelector('.category'),{
           
       })
   }
}
</script>

<style scoped>
.category{
    width: 100%;
    height: 300px;
    /* overflow: scroll; */
    background: #666;
    color: pink;
}
</style>