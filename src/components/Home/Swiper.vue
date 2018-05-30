<template>
    <div class="wrapper">
        <div class="carrousel">
        <swiper :options="swiperOption">
            <swiper-slide v-for="slide in list" :key="slide.id">
                <img class="swiper-img" :src="slide.imgUrl" alt="">
            </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
    </div>
</template>
<script>
export default {
  name: "wrapper",
  props:['list'],
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop:true,
        autoplay:true,
        speed:1500, 
      }
      }
  }
};
</script>
<style lang="stylus" scope>
.swiper-pagination-bullet-active 
    background #fff
.carrousel 
    height 0
    padding-bottom 31%
    overflow hidden
    .swiper-img
        width 100%
  

</style>


