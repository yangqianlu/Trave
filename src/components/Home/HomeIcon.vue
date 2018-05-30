<template>
    <div class="homeIcon">
        <div class="icon_wrap">
            <swiper :options="swiperOption">
                <swiper-slide class="swiperslide" v-for="(swiper,index) in pages" :key="index">
                    <div class="icon" v-for="item of swiper" :key="item.id">
                        <img class="icon_img" :src="item.imgUrl" alt="">
                        <p class="icon_text">{{item.desc}}</p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
    name:'HomeIcon',
    props:['list'],
    data(){
        return {
            swiperOption: {
                pagination: ".swiper-pagination",
                autoplay:false
        
             }
        }
    } , 
    computed:{
        pages(){
            var pages=[];
            this.list.forEach((item,index) => {
                var page=Math.floor(index/8)
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
                
            });
            return pages
        }
    }
}
</script>
<style lang="stylus" scope>
.swiper-container
    width :100%
    .swiperslide
       width:100%
.icon_wrap
   display:flex
   flex-wrap:wrap
   .icon
      width:25%
      float :left
      box-sizing:border-box
      .icon_img
        width:100%
        padding 10px 20px
        box-sizing :border-box
      .icon_text
         text-align:center
         line-height :30px
        
          

</style>


