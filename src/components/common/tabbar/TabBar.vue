<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0px;
  width: 100%;
  height: 49px;
  box-shadow: 0 -1px 1px #00000030;
  background-color: #f6f6f6;
   z-index: 99; 
}
</style>
