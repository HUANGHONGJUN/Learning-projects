<template>

<div class="Goodsitem" @click='clickitem'>
    <div class="goods-img">
        <img :src="showImage" alt="">
    </div>
    
    <div class="goods-info">
        <p>{{goodsitem.title}}</p>
        <div class="bot-box">
        <span class="price">{{goodsitem.orgPrice}}</span>
        <span class="collect">{{goodsitem.cfav}}</span>
        </div>
    </div>
</div>  
</template>

<script>


export default {
    name:'Goodsitem',
    props:{
        goodsitem:{
            type:Object,
            default(){
                return []
            }
        }
    },
    computed:{
      //这里判断用哪种数据类型，因为两个数据不一样
      showImage(){
        return this.goodsitem.image|| this.goodsitem.show.img 
      }
    },
    methods:{
      //点击某一个商品根据id去展示相对应的数据
      clickitem(){
        console.log(this.goodsitem.iid);
        //通过动态路由把iid传到详情页
        this.$router.push('/detail/'+this.goodsitem.iid)
      }
    }
}
</script>

<style scoped>
.Goodsitem {
  margin-top: 10px;
}
.Goodsitem:nth-child(odd) {
  margin-right: 10px;
}
.goods-img {
  width: 100%;
}
.goods-img img {
  border: none;
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  padding: 0 5px;
}
.goods-info p {
  overflow: hidden;
  /*让超出一行的文字显示省略号*/
  text-overflow: ellipsis;
  /*让文字一行显示*/
  white-space: nowrap;
  font-size: 12px;
  margin: 2px 0 4px;
}
.bot-box {
  display: flex;
  font-size: 14px;
}
.goods-info span:nth-of-type(1) {
  flex: 1;
  color: var(--color-high-text);
  font-weight: 700;
}
.goods-info span:nth-of-type(2) {
  flex: 1;
  position: relative;
  padding-right: 20px;
  text-align: right;
}
.goods-info span:nth-of-type(2)::after {
  position: absolute;
  right: 0px;
  top: 0px;
  width: 15px;
  height: 15px;
  background: url("../../../assets/img/common/collect.svg");
  background-size: 100%;
  content: "";
}
</style>