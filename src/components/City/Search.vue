<template>
    <div class="search">
        <input type="text" placeholder="请输入城市名或拼音">
    </div>
</template>

<script>
export default {
    name:'CitySearch'
}
</script>

<style lang="stylus" scoped>
 @import  '~@/assets/styles/varibles.styl'
 .search
  
    height :0.76rem
    line-height :0.76rem
    background :$bgcolor
    padding:0 0.1rem
    margin-top:-1px
    input 
        width :100%
        height :0.64rem;
        line-height :0.64rem
        text-align center
        color #333
        padding:0 0.1rem
        box-sizing :border-box
        border-radius:5px



</style>
