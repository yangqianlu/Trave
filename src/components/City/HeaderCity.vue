
<template>
    <div class="headerCity">
       <div class="header">
           选择城市
          <router-link to="/"> <span class="iconfont back_icon">&#xe624;</span></router-link>
       </div>
    </div>
</template>

<script>
export default {
name:'HeaderCity'
}
</script>

<style lang="stylus" scoped>
@import  '~@/assets/styles/varibles.styl'
.header
    width :100%
    height :$headerHeight
    line-height :$headerHeight
    background :$bgcolor
    text-align :center
    position :relative
    color :#fff
    font-size:0.32rem
    .back_icon
        position absolute
        font-size:0.4rem
        top:0
        left:0
        color #fff
        margin-left 10px
</style>




