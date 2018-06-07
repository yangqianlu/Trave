<template>
    <div class="detail">
        <detail-banner :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" :sightName="sightName"></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
    </div>
</template>

<script>
import DetailBanner from '@/components/HomeDetail/Banner'
import DetailHeader from '@/components/HomeDetail/Header'
import DetailList from '@/components/HomeDetail/List'
import axios from 'axios'

export default {
    name:'HomeDetail',
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
        return {
            sightName:'',
            list:[],
            gallaryImgs:[],
            bannerImg:''
        }
    },
    mounted(){
        var that=this
        axios.get('/static/mock/detail.json',{
            params:{
                id:this.$route.params.id
            }
        }).then(function(res){
             that.sightName=res.data.data.sightName
             that.list=res.data.data.categoryList
             that.gallaryImgs=res.data.data.gallaryImgs
             that.bannerImg=res.data.data.bannerImg
        })
    }
}
</script>

<style lang="stylus" scoped>

</style>
