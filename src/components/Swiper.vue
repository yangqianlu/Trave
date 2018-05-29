<template>
    <div class="wrapper">
        <div class="carrousel">
        <swiper :options="swiperOption">
            <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
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
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop:true
        
      },
      swiperSlides: [
          {
            id:"001",
            imgUrl:"https://img1.qunarzz.com/vc/af/f4/45/4756cd165e1462610598ceb201.png"
          }, 
          {   
              id:"002",
              imgUrl:"https://img1.qunarzz.com/vc/31/cc/75/3c014d49de263aea6bf9bffeda.png"
          }
          ]
    };
  }
};
</script>
<style lang="stylus" scope>
.swiper-pagination-bullet-active 
    background #fff
.carrousel 
    height 0
    padding-bottom 50%
    overflow hidden
    .swiper-img
        width 100%
  

</style>


