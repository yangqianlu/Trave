<template>
    <div class="banner">
        <div class="banner_container" @click="gallaryTypeClick">
            <img :src="bannerImg" alt="">
            <div class="mp-headfeagure-info">
                <p class="mp-headfeagure-title">{{sightName}}</p>
                <div class="mp-icon">
                    <span class="mp-imgswipeicon-icon iconfont">&#xe626;</span>
                    <span class="mp-imgswipeicon-num">31</span>
                </div>
            </div>
        </div>
        <fade>
            <gallary  v-show="gallaryType" @galleryHide="changeGallery" :imgs="gallaryImgs"></gallary>
        </fade>
    </div>
</template>

<script>
import Gallary from '@/components/Common/Gallary/Gallary'
import Fade from '@/components/Common/Fade/Fade'
export default {
    name:'DetailBanner',
    props:['sightName','gallaryImgs','bannerImg'],
    data(){
        return {
            gallaryType:false,
            imgs:["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg",'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg']
        }
    },
    components:{
        Gallary,
        Fade
    },
    methods: {
        gallaryTypeClick(){
            this.gallaryType=true
        },
        changeGallery(){
            this.gallaryType=false
        }
    }
}
</script>

<style lang="stylus" scoped>
.banner_container
    width :100%;
    padding-bottom :55%
    height :0
    overflow hidden
    position relative
    .mp-headfeagure-info
        position absolute
        bottom:0
        left:0
        color #ffffff
        display flex
        width :100%
        padding:0 10px;
        box-sizing :border-box
        background:linear-gradient(top,rgba(0,0,0,0.1),rgba(0,0,0,0.8))
        .mp-headfeagure-title
            flex:1
        .mp-icon
            padding :2px 10px;
            background :rgba(0,0,0,0.5)
            border-radius:10px
            margin-left auto
        

</style>
