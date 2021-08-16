<template >
    <div class="recommends">
        <div v-for="(item, index) in recommends" :key="index" class="recommends-item">
            <a :href="item.link">
           <img :src="item.image" alt="">
           <div>{{item.title}}</div>
           </a>
        </div>
    </div>
</template>
<script>
export default {
    name:"HomeRecommendView",
    props:{
        recommends:{
            type:Array,
            default(){
                return[]
            }
        }
    }
}
</script>
<style scoped>
    .recommends{
        display: flex;
        text-align: center;
        padding: 15px 0 30px;
        border-bottom: 10px solid #6666;
    }
    .recommends-item{
        flex: 1;
    }
    .recommends-item img{
        width: 100%;
        height: 90px;
        margin-bottom: 10px;
    }
</style>