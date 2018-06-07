<template>
    <div class="gallary" @click="gallaryHandle">
       <div class="container">
            <swiper :options="swiperOption">
            <swiper-slide v-for="(slide,index) in imgs" :key="index">
                <img class="swiper-img" :src="slide" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
       </div>
    </div>
</template>

<script>
export default {
    name:'Gallary',
    data(){
        return {
            swiperOption:{
                pagination:'.swiper-pagination',
                paginationType:'fraction',
                autoplay:false,
                observer:true,
                observeParents:true
            }
        }
    },
    props:['imgs'],
    methods: {
        gallaryHandle(){
            this.$emit('galleryHide')
        }
    }
}
</script>

<style lang="stylus" scoped>
.gallary
    position fixed
    top:0
    left:0
    right:0
    bottom:0
    background :#000000
    display flex
    align-items center
    z-index 99
    .container
        width :100%;
        padding-bottom 100%
        height 0
        .swiper-container
            overflow visible
            .swiper-img
                width 100%
        .swiper-pagination
            color :#ffffff
            bottom:-1rem
</style>
