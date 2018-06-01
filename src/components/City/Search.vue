<template>
    <div class="search">
        <input type="text" v-model="textCity" placeholder="请输入城市名或拼音">
        <div ref="ul_list" class="ul_list" v-show="this.textCity">
            <ul >
                <li @click="handleCity(item.name)" v-for="item in cityList" :key="item.id">{{item.name}}</li>
                <li v-show="hasData">没有找到你搜索的相关城市</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'CitySearch',
    props:['cities'],
    data(){
        return {
            textCity:'',
            cityList:[],
            timer:null
        }
   },
   computed:{
       hasData(){
           return !this.cityList.length
           
       }
   },
    methods:{
        handleCity(city){
            //console.log(city)
            this.$store.dispatch('cityChange',city)
            this.$router.push('/')
            //this.$store.commit('cityChange',city) 也可以用这种形式 store里action就可以不用了
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.ul_list)    
    },
    watch:{
        textCity(){
            if(this.timer){clearTimeout(this.timer)}
            this.timer=setTimeout(()=>{
                var cityList=[]
                for(var i in this.cities){
                    console.log(i)//A,B,...
                    this.cities[i].forEach(ele => {
                        console.log(ele)
                        if(ele.spell.indexOf(this.textCity)!=-1 || ele.name.indexOf(this.textCity)!=-1){
                            cityList.push(ele)
                    }
                    });
                }
                this.cityList=cityList
            },10)
        }
    }
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
        width :100%;
        height :0.64rem;
        line-height :0.64rem
        text-align center
        color #333
        padding:0 0.1rem
        box-sizing :border-box
        border-radius:5px
    .ul_list
        position absolute;
        z-index :111;
        width :100%;
        top:1.58rem;
        left:0;
        bottom:0;
        background: #eee;
        overflow hidden
        li
            line-height :30px
            border-bottom:1px solid #ccc
            padding-left 5px
            background: #fff;
             
</style>
