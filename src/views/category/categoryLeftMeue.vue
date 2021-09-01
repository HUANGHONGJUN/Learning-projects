<template>
  <scroll id="scroll">
    <div id="category-Left">
      <div
        v-for="(item, index) in Category"
        :key="index"
        class="Category-list-item"
        :class="{ active: currentIndex == index }"
        @click="itemindex(index)"
      >
        <p>{{ item.title }}</p>
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from "../../components/common/scroll/Scroll.vue";
export default {
  components: { Scroll },
  name: "categoryLeft",
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemindex(index) {
      this.currentIndex = index;
    //   console.log(this.currentIndex);
      this.$emit("itemindex",index)
    },
  },
  props: {
    Category: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
#category-Left {
  min-width: 80px;
}
.Category-list-item {
  font-size: 14px;
  padding: 15px 0;
  text-align: center;
  background: #fff;
  border-bottom: 3px solid bisque;
}
.Category-list-item p {
  padding: 0 10px;
  border-left: 4px solid transparent;
}
.active {
  background-color: #ffffff;
}
.active p {
  font-weight: 700;
  color: var(--color-high-text);
  border-color: var(--color-tint);
}
</style>