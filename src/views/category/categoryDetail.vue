<template>
  <div class="categoryDetail">
    <goodsitem
      v-for="(item, index) in categoryDetail"
      :key="index"
      class="list-item"
      :goodsitem="item"
    ></goodsitem>
  </div>
</template>

<script>
import Goodsitem from "../../components/content/goods/Goodsitem.vue";

export default {
  components: { Goodsitem },
  name: "categoryDetail",
  props: {
    categoryDetail: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.categoryDetail {
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(2, 135px);
  padding: 0 10px;
}
</style>