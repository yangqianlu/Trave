<template>
    <div class="guess">
        <h1 class="guess_title">周末去哪儿</h1>
        <div class="guess_content" v-for="item in list" :key="item.id">
            <img class="guess_img" :src="item.imgUrl" alt="">
            <div class="guess_right">
                <div class="mp_like_title">{{item.title}}</div>
                <span class="mp-comment-num">{{item.desc}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'HomeWeek',
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
        display :flex
         flex-direction :column
        margin-bottom:20px
        .guess_img
            width :100%
        .guess_right
            mix-width:0
            .mp_like_title
                line-height :30px
                font-size:0.32rem
                ellipsis()
            .mp-comment-num
                font sizrem
                color :#616161
                ellipsis()

</style>


