import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import City from '@/pages/City'
import HomeDetail from '@/pages/HomeDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'HomeDetail',
      component: HomeDetail
    }
  ]
})
