<template>
 <div>
    <cartitem v-for="(item,index) in this.$store.state.cartlist" :key="index" :itemInfo="item"></cartitem>   
</div>  
</template>

<script>
import cartitem from './cartitem.vue'
export default {
  components: { cartitem },
    name:'cartlist'
}
</script>

<style scoped>

</style>