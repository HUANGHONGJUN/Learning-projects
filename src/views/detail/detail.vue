<template>
 <div class="detail">
     <detail-navbar  />
     <scroll class="content">
         <detailswiper :imgs="imgs"/>
     <detail-base-info :goods="goodsInfo"/>
     <detailshop :shop="shop"></detailshop>
     <detail-info :detailInfo="detailInfo"></detail-info>
     </scroll>
 </div>
</template>

<script>
import detailNavbar from './childComps/detailNavbar.vue';
import {getdetail,Goods} from 'network/detailnetwrok.js'
import Detailswiper from './childComps/detailswiper.vue';
import DetailBaseInfo from './childComps/DetailBaseInfo.vue';
import Scroll from '../../components/common/scroll/Scroll.vue';
import Detailshop from './childComps/detailshop.vue';
import DetailInfo from './childComps/detailInfo.vue';
export default {
  components: { detailNavbar, Detailswiper ,DetailBaseInfo, Scroll, Detailshop,DetailInfo},
    
    data(){
        return {
            iid:null,
            imgs:[],
            goodsInfo:{},
            shop:{},
            detailInfo:{}
        }
    },
    created(){
        console.log(this.$route.params);
        this.iid = this.$route.params.iid

        //根据iid请求详细数据
        getdetail(this.iid).then(res =>{
            //res就是数据整体
            console.log(res);
            const data = res.result
            this.imgs = data.itemInfo.topImages


             //创建商品对象
             this.goodsInfo = new Goods(data.itemInfo,data.columns,data.shopInfo.services)  
             
             //取出商品对象
             this.shop = data.shopInfo

             //展示穿着效果数据
             this.detailInfo = data.detailInfo
        })


    }
}
</script>

<style scoped>

/* .content{
    height: calc(100% - 44px);
} */
</style>