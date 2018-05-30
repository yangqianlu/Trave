<template>
    <div class="city">
        <header-city></header-city>
        <city-search></city-search>
        <city-list></city-list>
    </div>
</template>
<script>
import HeaderCity from '@/components/City/HeaderCity'
import CitySearch from '@/components/City/Search'
import CityList from '@/components/City/List'
export default {
    name:'City',
    components:{
        HeaderCity,
        CitySearch,
        CityList
    }
}
</script>
<style>

</style>


