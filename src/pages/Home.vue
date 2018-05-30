<template>
    <div class="Home">
        <home-header :city="city"></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icon :list="iconList"></home-icon>
        <guess-like :list="recommendList"></guess-like>
        <home-week :list="weekendList"></home-week>
       
    </div>
</template>
<script>
import HomeHeader from '@/components/Home/HomeHeader'
import HomeSwiper from '@/components/Home/Swiper'
import HomeIcon from '@/components/Home/HomeIcon'
import GuessLike from '@/components/Home/GuessLike'
import HomeWeek from '@/components/Home/HomeWeek'
import axios from 'axios'
export default {
    name:'Home',
    data(){
        return {
            city:'',
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcon,
        GuessLike,
        HomeWeek
    },
    mounted(){
        let that=this
        axios.get('/static/mock/index.json')
        .then(function(res){
            // console.log(res.data)
            // const data=res.data
            that.city=res.data.city
            that.swiperList=res.data.data.swiperList
            that.iconList=res.data.data.iconList
            that.recommendList=res.data.data.recommendList
            that.weekendList=res.data.data.weekendList
           
        })
    }
}
</script>
<style>

</style>


