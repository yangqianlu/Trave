<template>
    <div class="list">
        <ul class="listUl">
            <li 
                v-for="(item,index) in list"
                :key="index">
                <span class="mp-ticketype-ticket "></span>{{item.title}}
                <div v-if="item.children" class="children">
                <detail-list :list="item.children"></detail-list>
                </div>
            </li>
            
        </ul>
    </div>
</template>

<script>
export default {
name:'DetailList',
props:['list']
}
</script>

<style lang="stylus" scoped>
.list
    width 100%
    .listUl
        width 100%
        li
            line-height 30px
            font-size 16px
            .mp-ticketype-ticket 
                display: inline-block;
                position relative
                width: .36rem;
                height: .36rem;
                left 0.06rem
                top:0.06rem
                background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
                margin-right: .1rem;
                background-size: .4rem 3rem;
            .children
                padding 0 0.2rem 
            

</style>
