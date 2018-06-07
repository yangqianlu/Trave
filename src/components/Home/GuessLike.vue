<template>
    <div class="guess">
        <h1 class="guess_title">猜你喜欢</h1>
      
            <div class="guess_content" v-for="item in list" :key="item.id">
                <router-link :to="'/detail/'+item.id" tag="div" class="content">
                    <img class="guess_img" :src="item.imgUrl" alt="">
                    <div class="guess_right">
                        <div class="mp_like_title">{{item.title}}</div>
                        <span class="mp-comment-num">{{item.desc}}</span>
                        <button>查看详情</button>
                    </div>
                </router-link>
            </div>
       
    </div>
</template>
<script>
export default {
    name:'GuessLike',
    props:['list'],
    data(){
        return {
          
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.guess
    width :100%
    padding:0 20px
    box-sizing :border-box
    .guess_title
        font-size :16px
        margin-bottom: 16px
        margin-top: 5px
    .guess_content  
       
        margin-bottom:20px
        .content
            display:flex
        .guess_img
            width :2rem
            height 2rem
        .guess_right
            flex:1
            min-width: 0;
            display :flex
            justify-content :space-around
            flex-direction :column
            margin-left :10px
            .mp_like_title
                font-size:0.32rem
                ellipsis()
            .mp-comment-num
                font sizrem
                color :#616161
                ellipsis()
            button
                background :#ff8300
                width :100px
                height 30px
                text-align :center
                line-height :30px
                color :#fff
                border-radius:5px



</style>


