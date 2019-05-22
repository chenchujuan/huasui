// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import './styles/common.css'
import './styles/iconfont.css'
import './utils/flexible'
import 'swiper/dist/css/swiper.css';
import { post } from './server/api'
//定义全局变量
Vue.prototype.$post = post;
Vue.use(Mint);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
