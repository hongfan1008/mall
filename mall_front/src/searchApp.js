import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/router'
import axios from 'axios'
import SearchApp from "./SearchApp.vue";
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
    el: '#search',
    render: h => h(SearchApp)
});
