<template>
 <div id="detail-swiper">
    <swiper class="sw">
        <swiper-item v-for="(item,index) in imgs " :key="index" class="sw-item">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
     </div>  
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
// import Swiper from '../../../components/common/swiper/Swiper.vue'
//  import SwiperItem from '../../../components/common/swiper/SwiperItem.vue'
export default {
  components: { Swiper,SwiperItem },
    name:'detailswiper',
    props:{
        imgs:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.sw{
    width: 100%;
    height: 300px;
}
.sw-item img{
    width: 100%;
    height: 100%;
}
</style>