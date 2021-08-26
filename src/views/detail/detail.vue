<template>
  <div class="detail">
    <detail-navbar @titleclick="titleclick" />
    <scroll class="content" ref="scroll"  >
      <detailswiper :imgs="imgs" />
      <detail-base-info :goods="goodsInfo" />
      <detailshop :shop="shop"></detailshop>
      <detail-info :detailInfo="detailInfo" @load="imageLoad"></detail-info>
      <detail-params-info
        :paramsInfo="paramsinfo"
        ref="params"
      ></detail-params-info>
      <detail-comment-info
        :CommentInfo="CommentInfo"
        ref="comment"
      ></detail-comment-info>
      <goodslist :goods="recommends" ref="goodslist"></goodslist>
    </scroll>
    <detailbottomnav @addToCart="addToCart"></detailbottomnav>
  </div>
</template>

<script>
import detailNavbar from "./childComps/detailNavbar.vue";
import {
  getdetail,
  Goods,
  getRecommend,
  GoodsParam,
} from "network/detailnetwrok.js";
import Detailswiper from "./childComps/detailswiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import Detailshop from "./childComps/detailshop.vue";
import DetailInfo from "./childComps/detailInfo.vue";
import DetailParamsInfo from "./childComps/detailParamsInfo.vue";
import DetailCommentInfo from "./childComps/detailCommentInfo.vue";
import Goodslist from "../../components/content/goods/Goodslist.vue";
import Detailbottomnav from "./childComps/detailbottomnav.vue";
// import { debounce } from "common/utils";
export default {
  components: {
    detailNavbar,
    Detailswiper,
    DetailBaseInfo,
    Scroll,
    Detailshop,
    DetailInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    Goodslist,
    Detailbottomnav,
  },

  data() {
    return {
      iid: null,
      imgs: [],
      goodsInfo: {},
      shop: {},
      detailInfo: {},
      paramsinfo: {},
      CommentInfo: {},
      recommends: [],
      topy: [],
      getThemeTopY:null
    };
  },
  created() {
    console.log(this.$route.params);
    //将动态路由获取的参数this.$route.params.iid 赋值给iid
    this.iid = this.$route.params.iid;

    //根据iid请求详细数据
    getdetail(this.iid).then((res) => {
      //res就是数据整体
      console.log(res);
      const data = res.result;
      this.imgs = data.itemInfo.topImages;

      //创建商品对象
      this.goodsInfo = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //取出商品
      this.shop = data.shopInfo;

      //取出展示穿着效果数据
      this.detailInfo = data.detailInfo;

      //获取详细页商品参数
      this.paramsinfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      //获取评论
      if (data.rate.cRate !== 0) {
        this.CommentInfo = data.rate.list[0];
      }

    //   this.$nextTick(() => {
    //       //根据最新的数据，对应do'm是已经被渲染出来了
    //       //但是图片还没加载完全(就是说获取到的offsettop是不包含图片的)
    //     // this.topy = [];

    //     // this.topy.push(0);
    //     // this.topy.push(this.$refs.params.$el.offsetTop);
    //     // this.topy.push(this.$refs.comment.$el.offsetTop);
    //     // this.topy.push(this.$refs.goodslist.$el.offsetTop);

    //     // console.log(this.topy);
    //   });
      
    });


    //请求详细数据
    getRecommend().then((res) => {
      console.log(res);
      this.recommends = res.data.list;
    });

    // this.getThemeTopY =debounce(() =>{
    //     this.topy = [];

    //     this.topy.push(0);
    //     this.topy.push(this.$refs.params.$el.offsetTop);
    //     this.topy.push(this.$refs.comment.$el.offsetTop);
    //     this.topy.push(this.$refs.goodslist.$el.offsetTop);

    //     console.log(this.topy);
    // })

  },
  updated() {
      this.$nextTick(() => {
          //根据最新的数据，对应dom是已经被渲染出来了
          //但是图片还没加载完全(就是说获取到的offsettop是不包含图片的)
          //所以放在updataed里
         this.topy = [];

        this.topy.push(0);
         this.topy.push(this.$refs.params.$el.offsetTop);
         this.topy.push(this.$refs.comment.$el.offsetTop);
         this.topy.push(this.$refs.goodslist.$el.offsetTop);

          console.log(this.topy);
      });
  },
  methods: {
      imageLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
    titleclick(index) {
      console.log(index);
       this.$refs.scroll.scrollTo(0, -this.topy[index], 500);
    },
    //  contentScroll(positon){
    //       console.log(positon);
    //  }
    //请求购物车需要的商品信息
    addToCart(){
      //把商品传入vuex判断是否存在，存在就+1

      //展示信息
      const product = {}
      product.image = this.imgs[0]
      product.title = this.goodsInfo.title
      product.desc = this.goodsInfo.desc
      product.price = this.goodsInfo.realprice
      product.iid = this.iid
      console.log(this.$store.state.cartlist);
      //将商品添加到购物车里面
      this.$store.dispatch('addCart',product)
    }
  },
};
</script>

<style scoped>
.detail {
  height: 100vh;
  background: #fff;
  position: relative;
  z-index: 1;
}
.content {
  background: #fff;
  height: calc(100% - 44px - 50px);
  overflow: hidden;
}
</style>