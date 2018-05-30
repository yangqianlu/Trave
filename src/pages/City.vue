<template>
    <div class="city">
        <header-city></header-city>
        <city-search></city-search>
    </div>
</template>
<script>
import HeaderCity from '@/components/City/HeaderCity'
import CitySearch from '@/components/City/Search'
export default {
    name:'City',
    components:{
        HeaderCity,
        CitySearch
    }
}
</script>
<style>

</style>


