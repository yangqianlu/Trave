<template>
    <div class="Home">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icon></home-icon>
    </div>
</template>
<script>
import HomeHeader from '@/components/Home/HomeHeader'
import HomeSwiper from '@/components/Home/Swiper'
import HomeIcon from '@/components/Home/HomeIcon'
export default {
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcon
    }
}
</script>
<style>

</style>


