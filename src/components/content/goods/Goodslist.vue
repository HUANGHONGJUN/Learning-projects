<template>
  <div class="Goodslist">
      <goodsitem class="item" v-for="(item, index) in goods" :key="index"  :goodsitem="item" />
  </div>
</template>

<script>
import Goodsitem from './Goodsitem.vue'
export default {
    name:'Goodslist',
    components:{
        Goodsitem
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.Goodslist {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 10px;

}
.item {
  width: 48%;
}
</style>