<template>
 <div class="detail">
     <detail-navbar  />
     <scroll class="content">
         <detailswiper :imgs="imgs"/>
     <detail-base-info :goods="goodsInfo"/>
     <detailshop :shop="shop"></detailshop>
     <detail-info :detailInfo="detailInfo"></detail-info>
     <detail-params-info :paramsInfo="paramsinfo"></detail-params-info>
     <detail-comment-info :CommentInfo="CommentInfo"></detail-comment-info>
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
import DetailParamsInfo from './childComps/detailParamsInfo.vue';
import DetailCommentInfo from './childComps/detailCommentInfo.vue';
export default {
  components: { detailNavbar, Detailswiper ,DetailBaseInfo, Scroll, Detailshop,DetailInfo, DetailParamsInfo, DetailCommentInfo},
    
    data(){
        return {
            iid:null,
            imgs:[],
            goodsInfo:{},
            shop:{},
            detailInfo:{},
            paramsinfo:{},
            CommentInfo:{}
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

             //获取详细页商品参数
             this.paramsinfo = data.itemParams;

             //获取评论
             if (data.rate.cRate !== 0) {
                 this.CommentInfo = data.rate.list[0]
             }
             
        })


    }
}
</script>

<style scoped>

/* .content{
    height: calc(100% - 44px);
} */
</style>