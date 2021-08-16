<template >
    <div class="tabcontrol">
        <div v-for="(item,index) in titles" :key="index" class="tabcontrol-item" :class="{ active: index == currentIndex }" @click="itemClick(index)" > 
            <span>{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    //这里通过props让父组件来设定
    name:'tabControl',
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
           currentIndex:0
        }
    },
    methods:{
        //子传父 为了得到title的index
        itemClick(index){
            this.currentIndex = index;
            this.$emit('tabClick',index)
        }
    }
}
</script>
<style scoped>
    .tabcontrol{
        width: 100%;
        height: 40px;
        /* background: #666; */
        margin-top: 10px;
        display: flex;
        text-align: center;
        background: white;
    }
    .tabcontrol-item{
        flex: 1;   
        line-height: 40px;
    }
    .tabcontrol-item span:hover{
        border-bottom: 3px solid pink;
        color: pink;
    }
</style>