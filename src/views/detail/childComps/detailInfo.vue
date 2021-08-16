<template>
<div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :src="item"
        :key="index"
        @load="imageLoad"
      />
    </div>
  </div> 
</template>

<script>
export default {
    name:'detailInfo',
    data() {
    return {
      imagesLength: 0,
      counter: 0,
    };
  },
    props:{
        detailInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    watch: {
    detailInfo() {
      // 获取图片个数
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
    },
  },
  methods: {
    imageLoad() {
      // 判断，当所有图片加载完，执行一次回调
      if (++this.counter === this.imagesLength) {
        this.$emit("imageLoad");
      }
    },
  },
}
</script>

<style scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
.info-desc {
  padding: 0 15px;
}
.info-desc .start,
.info-desc .end {
  position: relative;
  width: 90px;
  height: 1px;
  background-color: #a3a3a3;
}
.info-desc .start {
  float: left;
}
.info-desc .end {
  float: right;
}
.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333333;
  bottom: 0;
}
.info-desc .end::after {
  right: 0;
}
.info-key {
  margin: 10px 0;
  color: #333333;
  text-align: center;
  font-size: 15px;
}
.info-list img {
  width: 100%;
}
</style>