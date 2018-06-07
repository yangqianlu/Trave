<template>
    <div class="list">
        <ul>
            <li 
            v-for="(city,key) of cities"
            :key="key"
            :ref="key"
            @click="handleClick(key)"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            >{{key}}</li>
            
        </ul>
    </div>
</template>

<script>
export default {
    name:"AlphaBet",
    props:['cities'],
    data(){
       return {
            status:false,
            timer:null,
            Alocation:0
       }
    },
    computed:{
        letter(){
            const letters=[]
            for(var i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    updataed(){
        //updataed 只有事先定义好的data变量改变 并且在页面重新渲染完成之后才会执行
        //刚开始 cities ={} ajax请求完才有内容
        this.Alocation=this.$refs['A'][0].offsetTop
    },
    methods:{
        handleClick(key){
            //console.log(key)
            this.$emit('change',key)
        },
        handleTouchStart(){
            this.status=true
        },
        handleTouchMove(e){
            //console.log(this.letter)
            if(this.status){
               if(this.timer){
                   clearTimeout(this.timer)
               }
               this.timer=setTimeout(()=>{
                    
                        //console.log(Alocation)
                    var clientY=e.touches[0].clientY
                    var index=Math.floor((clientY-this.Alocation-79)/20) //79是头部的高度 差值除以每个字母的高度 得到数字
                    //console.log(index)
                    if(index>=0 && index<this.letter.length){
                        this.$emit('change',this.letter[index])
                    }
               },16)//函数节流
            }
        },
        handleTouchEnd(){
            this.status=false
        }
    }
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
