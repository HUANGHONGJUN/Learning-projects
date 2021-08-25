<template>
    <div class="cart">
        <nav-bar class="nav-bar">
            <div slot="center">购物车({{cartlength}})</div>
        </nav-bar>


        <cartlist></cartlist>
       <cart-bottom-bar />
    </div>
</template>


<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'
import Cartlist from './childComps/cartlist.vue'


export default {
  components: { NavBar,  Cartlist, CartBottomBar },
    name:"cart",
    computed:{
        cartlength(){
            return this.$store.state.cartlist.length
        }
    }
}
</script>

<style scoped>
.nav-bar{
    background-color: pink;
    font-weight: 700;
}
</style>