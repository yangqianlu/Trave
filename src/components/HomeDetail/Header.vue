<template>
    <div class="header">
      <router-link to="/">
         <div class="header-abs" v-show="headerType">
           <div class="iconfont leftArrow">&#xe624;</div>
        </div>
      </router-link>
       <div class="header-fixed" :style="opcityType" v-show="!headerType">
           <router-link to="/"> <span class="iconfont leftArrow">&#xe624;</span></router-link>
                景点详情
       </div>
    </div>
</template>

<script>
export default {
name:'Detailheader',
data(){
    return {
        headerType:true,
        opcityType:{
            opacity:0
        }
    }
},
methods:{
    handleScroll(){
        var top=document.documentElement.scrollTop
        //console.log(top)
        if(top>60){
            var opacity=top/140
            var opacityT=opacity>1?1:opacity
            this.headerType=false
            this.opcityType.opacity=opacityT

        }else{
            this.headerType=true
        }

    }
},
activated(){
    window.addEventListener('scroll',this.handleScroll)
},
deactivated(){
    window.removeEventListener('scroll',this.handleScroll)//全局解绑 deactivated会在本页面销毁的时候执行
}
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header-abs
    position absolute
    top 0.2rem
    left 0.2rem
    line-height 0.8rem
    text-align center
    width 0.8rem
    height 0.8rem
    background rgba(0,0,0,0.8)
    border-radius 50%
    .leftArrow
        color #ffffff
.header-fixed
    position fixed
    top:0
    left:0
    right:0
    line-height:$headerHeight
    background: $bgcolor
    color #fff
    width:100%
    text-align center
    .leftArrow
        font-size :0.4rem
        color #ffffff
        position absolute
        top:0rem
        left:0.2rem
</style>
