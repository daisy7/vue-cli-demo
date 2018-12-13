import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from '@/axios'
import VueAxios from 'vue-axios'
import store from '@/store'
Vue.use(VueAxios, axios);

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import VeeValidate from '@/vee-validate'
Vue.use(VeeValidate);


Vue.config.productionTip = false

import 'assets/css/base.css'
import 'assets/scss/theme.scss';

import 'babel-polyfill'
import '@/plugins/flexible'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
