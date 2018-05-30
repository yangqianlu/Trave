<template>
    <div class="list">
        <ul>
            <li>A</li>
            <li>A</li>
            <li>A</li>
            <li>A</li>
            <li>A</li>
            <li>A</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"AlphaBet"
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
    .list
        position absolute
        display flex
        justify-content center
        align-items :center
        bottom:0
        top:1.5rem
        color $bgcolor
        right:0
        line-height :20px
        width :0.4rem;
        background #fff

</style>
