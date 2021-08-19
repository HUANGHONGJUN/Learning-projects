<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Scroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default() {
          return 0
        }
      },
      pullUpLoad: {
        type: Boolean,
        default() {
          return false;
        }
      },
      data: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        scroll:null,
        tea:"得闲饮茶"
      }
    },
    mounted() {
      // 创建scroll对象
      this.scroll = new Scroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        observeDOM:true
      })
      // 监听滚动位置
      if (this.probeType == 2 || this.probeType == 3) {
        this.scroll.on('scroll', positon => {
          this.$emit('scroll', positon)
        })
      }
      // 监听scroll滚动到底部
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    },
    methods: {
      scrollTo(x, y, time = 500) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>

</style>
