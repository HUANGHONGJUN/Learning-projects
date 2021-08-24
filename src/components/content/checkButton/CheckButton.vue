<template>
  <div class="check-button" :class="{ check: isCheck }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isCheck: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
};
</script>

<style scoped>
.check-button {
  border: 2px solid #aaaaaa;
  border-radius: 50%;
}
.check {
  border-color: pink;
  background-color: pink;
}
</style>