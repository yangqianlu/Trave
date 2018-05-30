<template>
    <div class="city">
        <header-city></header-city>
        <city-search></city-search>
        <city-list :hot="hotCities" :cities="cities"></city-list>
        <alpha-bet :cities="cities"></alpha-bet>
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
            cities:{}
        }
    },
    mounted(){
        var that=this
        axios.get('/static/mock/city.json').then(function(res){
            that.hotCities=res.data.data.hotCities
            that.cities=res.data.data.cities
        })
    }
}
</script>
<style>

</style>


