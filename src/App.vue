<template>
  <div id="app">
    <!-- exclude="HomeDetail" vue页面name名为HomeDetail的页面不被缓存 -->
    <keep-alive exclude="HomeDetail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
