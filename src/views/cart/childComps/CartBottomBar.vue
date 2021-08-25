<template>
  <div class="bottom-bar">
    <div class="button">
    <CheckButton class="check-button" />
    <span>全选</span>
    </div>

    <div class="cart-price">
      合计：{{totalPrice}}
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton"
export default {
  name:"cartbottombar",
  components:{CheckButton},
  computed:{
    //通过判断 加入cartlist里的物品的checked属性是否为true，如果为true则通过reduce函数将价格*数量
    totalPrice(){
      return "💴：" + this.$store.state.cartlist.filter(item =>{
        return item.checked == true
      }).reduce((preValue,item) =>{
        return preValue + item.price * item.count
      },0).toFixed(2)
    }
  }
}
</script>

<style scoped>
 .bottom-bar{
   width: 100%;
   height: 50px;
   background: rgb(221, 121, 121);
   position: absolute;
   bottom: 40px;
   padding-top: 10px;
   display: flex;
 }
 .button{
   display: flex;
 }
 .check-button{
   width: 20px;
   height: 20px;
 }
 .button>span{
   padding-left: 7px;
   line-height: 20px;
 }
 .cart-price{
   padding-left: 15px;
 }
</style>