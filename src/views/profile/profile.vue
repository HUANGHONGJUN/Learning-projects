<template>
    <div class="profile">
        <nav-bar class="nav-bar">
            <div slot="center">我的</div>
        </nav-bar>

        <div class="center">
            <avatar />
        </div>

        <div class="foot">
            
        </div>
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import Avatar from './childComps/avatar.vue'


export default {
  components: { NavBar, Avatar },
    name:'porfile'
}
        NavBar
</script>

<style scoped>
 .nav-bar{
     background: pink;
     font-weight: 400;
     color: white;
 }
 
 
</style>