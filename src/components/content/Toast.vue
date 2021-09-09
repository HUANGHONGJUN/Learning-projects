<template>
  <div class="Toast" v-show="show">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    message: {
      type: String,
      default() {
        return "";
      },
    },

      show: {
        type: Boolean,
        default() {
         return false;
        },
      },
    
  },
};
</script>

<style scoped>
.Toast {
  font-size: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  background-color: rgba(0, 0, 0, .75);
  padding: 15px 20px;
  border-radius: 10px;
}
</style>