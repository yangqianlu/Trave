<template>
    <div class="Home">
        <home-header></home-header>
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
import {mapState} from 'vuex'
export default {
    name:'Home',
    data(){
        return {
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[],
            lastCity:''
        }
    },
    computed: {
        ...mapState(['city'])
    },
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcon,
        GuessLike,
        HomeWeek
    },
    mounted(){
        this.lastCity=this.city
        this.getCity()
    },
   methods:{
       getCity(){
           axios.get('/static/mock/index.json?city='+this.city)
        .then(this.getCityList)
       },
       getCityList(res){
            this.swiperList=res.data.data.swiperList
            this.iconList=res.data.data.iconList
            this.recommendList=res.data.data.recommendList
            this.weekendList=res.data.data.weekendList
       }
   },
    activated () {
        if(this.lastCity!=this.city){
            this.lastCity=this.city
            this.getCity()
        }
    }
}
</script>
<style>

</style>


