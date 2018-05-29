<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont leftArrow">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont searchIcon">&#xe632;</span>
      <input type="text" placeholder="输入城市">
    </div>
    <div class="header-right">城市 <span class="iconfont">&#xe64a;</span></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~@/assets/styles/varibles.styl'
  .header
    line-height:0.86rem
    background: $bgcolor
    color #fff
    width:100%
    display :flex
    .header-left
      width 0.64rem
      .leftArrow
        text-align :center
        font-size :0.4rem
    .header-right
      width :1.24rem
      margin-left:0.1rem
    .header-input
      
      flex:1
      position:relative
      .searchIcon
       position:absolute
       top:0
       left:5px
       color:#ccc
      input 
        padding-left:30px
        box-sizing :border-box
        width:100% 
        height :0.64rem
        border-radius:0.1rem
</style>
