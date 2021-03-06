import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/router'
import axios from 'axios'
import Cart from "./Cart.vue";
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
    el: '#cart',
    render: h => h(Cart)
});
