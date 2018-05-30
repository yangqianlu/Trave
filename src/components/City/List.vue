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
                <div class="wrap" v-for="item of hot" :key="item.id">
                    <div class="item">{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="area" v-for="(city,key) of cities" :key="key">
            <div class="title">
                {{key}}
            </div>
           <ul class="ul_list">
               <li v-for="item of city" :key="item.id">{{item.name}}</li>
              
           </ul>
        </div>
       
       
        
     </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name:'CityList',
    props:['hot',"cities"],
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
                padding-left 5px

</style>
