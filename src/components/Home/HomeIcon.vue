<template>
    <div class="homeIcon">
        <div class="icon_wrap">
            <swiper >
                <swiper-slide class="swiperslide" v-for="(swiper,index) in pages" :key="index">
                    <div class="icon" v-for="item of swiper" :key="item.id">
                        <img class="icon_img" :src="item.iconUrl" alt="">
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
    data(){
        return {
            iconList:[
                {
                    id:'001',
                    iconUrl:'https://imgs.qunarzz.com/piao/fusion/1606/b3/0249b48a69aaf49a.png',
                    desc:'周边游'
                },
                {
                    id:'002',
                    iconUrl:'https://imgs.qunarzz.com/piao/fusion/1606/b3/0249b48a69aaf49a.png',
                    desc:'周边游'
                },
                {
                    id:'003',
                    iconUrl:'https://imgs.qunarzz.com/piao/fusion/1606/b3/0249b48a69aaf49a.png',
                    desc:'周边游'
                },
                {
                    id:'004',
                    iconUrl:'https://imgs.qunarzz.com/piao/fusion/1606/b3/0249b48a69aaf49a.png',
                    desc:'周边游'
                },
                {
                    id:'005',
                    iconUrl:'https://imgs.qunarzz.com/piao/fusion/1606/b3/0249b48a69aaf49a.png',
                    desc:'周边游'
                },
                {
                    id:'006',
                    iconUrl:'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
                    desc:'踏青赏花'
                },
                {
                    id:'007',
                    iconUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                    desc:'动植物园'
                },
                {
                    id:'008',
                    iconUrl:'https://imgs.qunarzz.com/piao/fusion/1704/fd/7b733d3656f4d002.png',
                    desc:'八达岭长城'
                }
                ,
                {
                    id:'008',
                    iconUrl:'https://imgs.qunarzz.com/piao/fusion/1703/5a/612ae0fee636d202.jpg',
                    desc:'故宫'
                }
                 ,
                {
                    id:'008',
                    iconUrl:'https://imgs.qunarzz.com/piao/fusion/1804/53/f7c33a4412d59e02.png',
                    desc:'Q+专线'
                }
            ]
        }
    } , 
    computed:{
        pages(){
            var pages=[];
            this.iconList.forEach((item,index) => {
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


