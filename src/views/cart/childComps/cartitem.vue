<template>
  <div id="shop-item">
    <div class="item-selector">
      <check-button :isCheck="itemInfo.check" @click.native="isCheck"/>
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">商品描述: {{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{itemInfo.price}}</div>
        <div class="item-count right">x{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton"
export default {
  name: "CartListItems",
  components:{
    CheckButton
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    isCheck() {
      this.itemInfo.check = !this.itemInfo.check
    }
  }
};
</script>

<style scoped>
#shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
    border-radius: 10px;
  }
 
 .item-selector{
     width: 14%;
     display: flex;
     justify-content: center;
     align-items: center;
 }

 .item-img{
     padding: 5px;
 }
 .item-img img {
     width: 80px;
     height: 100px;
     border-radius: 5px;
 }
 .item-info{
     font-size: 14px;
     overflow: hidden;
     position: relative;
 }
 .item-desc,.item-title{
     font-size: 15px;
     margin-top: 13px;
     font-weight: 500;
     color: #666;
 }
 .info-bottom{
     font-weight: 500;
     position:absolute;
     right: 0;
     left: 0;
     bottom: 5px;
 }
 </style>