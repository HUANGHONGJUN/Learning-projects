<template>
  <div class="cart-bottom-bar">
    <div class="check-all">
      <check-button
        class="check-btn"
        :is-check="isSelectAll"
        @click.native="checkClick"
      />
      <span>全选</span>
    </div>
    <div class="total-price">合计：{{ totalprice }}</div>
    <div class="calulate" @click="calcClick">去结算 ({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  data() {
    return {
      // f:null
    };
  },
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalprice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => {
            return item.check;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      // 注意这里的数量是所有选中商品的数量
      return this.cartList
        .filter((item) => {
          return item.check;
        })
        .reduce((preValue, item) => {
          return preValue + item.count;
        }, 0);
    },
    isSelectAll() {
      // 判断数组是不是没有长度，没有长度说明没有商品，返回false，让他不选中
      // 之后遍历数组，如果有一个没有选中的那他长度为1，取反之后为false，然后返回false
      if (!this.cartList.length) return false;
      // 这里用filter是有点影响性能的，因为他要遍历完数组，所以我们可以用find
      // return !(this.cartList.filter(item => !item.check).length)
      return !this.cartList.find((item) => !item.check);

      // 遍历的做法
      // for(let item of this.cartList){
      //   if(!item.check){
      //     return false
      //   }
      // }
      // return true
    },
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach((item) => {
          item.check = false;
        });
      } else {
        this.cartList.forEach((item) => {
          item.check = true;
        });
      }
    },
    calcClick() {
      if (this.cartList == 0) {
        this.$toast.show("您还没有商品在购物车", 2000);
      } else {
        this.$toast.show("选择购买的商品", 2000);
      }
    },
  },
};
</script>

<style scoped>
.cart-bottom-bar {
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #eee;
}
.check-all {
  display: flex;
  align-items: center;
  margin: 0 25px 0 15px;
  width: 60px;
  height: 100%;
}
.check-all span {
  margin-left: 5px;
}
.check-btn {
  width: 20px;
  height: 20px;
  line-height: 20px;
}
.calulate {
  width: 100px;
  text-align: center;
  color: #ffffff;
  background-color: #ff5777;
}
.total-price {
  flex: 1;
}
</style>