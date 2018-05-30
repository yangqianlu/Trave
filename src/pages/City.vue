<template>
    <div class="city">
        <header-city></header-city>
        <city-search></city-search>
        <city-list></city-list>
        <alpha-bet></alpha-bet>
    </div>
</template>
<script>
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
    }
}
</script>
<style>

</style>


