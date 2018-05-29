// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'// 重置样式
import  './assets/styles/border.css' //手机边框显示2px
import fastClick from 'fastclick'  //手机点击延迟300ms
import './assets/styles/iconfont.css' //字体库
fastClick.attach(document.body) //fastclick里面的方法
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
