// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './styles/common.css'
import './styles/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import { post } from './server/api'
import "https://rytk20.kuaishang.cn/bs/ks.j?cI=910193&fI=125371";
//定义全局变量
Vue.prototype.$post = post;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
