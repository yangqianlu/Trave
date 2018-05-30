<template>
    <div class="list" ref="wrapper">
     <div>
         <div class="area">
            <div class="title">
                当前城市
            </div>
            <div class="list_content">
                <div class="wrap">
                    <div class="item">北京</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title">
                热门城市
            </div>
            <div class="list_content">
                <div class="wrap">
                    <div class="item">北京</div>
                </div>
                <div class="wrap">
                    <div class="item">北京</div>
                </div>
                <div class="wrap">
                    <div class="item">北京</div>
                </div>
                <div class="wrap">
                    <div class="item">北京</div>
                </div>
                <div class="wrap">
                    <div class="item">北京</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title">
                A
            </div>
           <ul class="ul_list">
               <li>上海</li>
               <li>上海</li>
               <li>上海</li>
               <li>上海</li>
           </ul>
        </div>
        <div class="area">
            <div class="title">
                A
            </div>
           <ul class="ul_list">
               <li>上海</li>
               <li>上海</li>
               <li>上海</li>
               <li>上海</li>
           </ul>
        </div>
        <div class="area">
            <div class="title">
                A
            </div>
           <ul class="ul_list">
               <li>上海</li>
               <li>上海</li>
               <li>上海</li>
               <li>上海</li>
           </ul>
        </div>
        <div class="area">
            <div class="title">
                A
            </div>
           <ul class="ul_list">
               <li>上海</li>
               <li>上海</li>
               <li>上海</li>
               <li>上海</li>
           </ul>
        </div>
     </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name:'CityList',
    data(){
        return {
           
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper)
    }
}
</script>

<style lang="stylus" scoped>
@import  '~@/assets/styles/varibles.styl'
.list
    position absolute
    top:1.6rem
    left:0
    right :0
    bottom:0
  
    overflow hidden
    .area
        .title
            padding-left:0.2rem
            background :#eee
            height :0.5rem;
            line-height :0.5rem;
        .list_content
            overflow hidden
            padding-right:0.4rem
            padding-top:0.1rem
            .wrap
                float left
                width 33.3%
                .item
                    margin :0.1rem
                    padding 0.1rem
                    border:1px solid #ccc
                    text-align :center
                    border-radius:5px
        .ul_list
            li
                line-height :30px
                border-bottom:1px solid #ccc

</style>
