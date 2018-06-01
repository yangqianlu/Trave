<template>
    <div class="city">
        <header-city></header-city>
        <city-search :cities="cities"></city-search>
        <city-list :hot="hotCities" :cities="cities" :letter="letter"></city-list>
        <alpha-bet @change="receive" :cities="cities"></alpha-bet>
    </div>
</template>
<script>
import axios from 'axios'
import HeaderCity from '@/components/City/HeaderCity'
import CitySearch from '@/components/City/Search'
import CityList from '@/components/City/List'
import AlphaBet from '@/components/City/AlphaBet'
export default {
    name:'City',
    components:{
        HeaderCity,
        CitySearch,
        CityList,
        AlphaBet
    },
    data(){
        return {
            hotCities:[],
            cities:{},
            letter:""
        }
    },
    mounted(){
        var that=this
        axios.get('/static/mock/city.json').then(function(res){
            that.hotCities=res.data.data.hotCities
            that.cities=res.data.data.cities
        })
    },
    methods:{
        receive(msg){
            //console.log(msg)
            this.letter=msg
        }
    }

}
</script>
<style>

</style>


