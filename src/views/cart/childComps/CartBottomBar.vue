<template>
  <div class="bottom-bar">
    <div class="button">
    <CheckButton class="check-button" :isCheck="isSelectAll" @click.native="checkClick" />
    <span>全选</span>
    </div>

    <div class="cart-price">
      合计：{{totalPrice}}
    </div>

    <div class="calculate">
      去计算:{{checkedlengt}}
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
    },
    checkedlengt(){
      return this.$store.state.cartlist.filter(item =>item.checked).length
    },
    isSelectAll(){
      //判断cartlist的所有商品checked属性是否为ture (默认为ture)
     return this.$store.state.cartlist.every(item =>item.checked)

    
    },
  },
  methods:{
    checkClick(){
      //点击全选与全不选
      if (this.isSelectAll) {
        this.$store.state.cartlist.forEach((item) => {
        item.checked = false
      })
      }else{
        this.$store.state.cartlist.forEach((item) => {
        item.checked = true
      })
      }
      
    }
  }
  
}
</script>

<style scoped>
 .bottom-bar{
   width: 100%;
   height: 50px;
   background: white;
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
 .calculate{
   padding-left:90px ;
   font-weight: 500;
 }
</style>