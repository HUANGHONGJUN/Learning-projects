<template >
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>
<script>
export default {
    name:"NavBar"
}
</script>
<style scoped>
    .nav-bar{
        display: flex;
        line-height: 44px;
        height: 44px;
        text-align: center;

        position: sticky;
        top: 0;
        z-index: 99;
    }
    .left,.right{
        width: 60px;
        
    }
    .center{
        /**如果两边有宽度，flex：1就会把剩下的补充完整 */
        flex: 1;
    }
</style>