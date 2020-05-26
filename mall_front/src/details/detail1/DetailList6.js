import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import DetailList6 from "./DetailList6.vue";
Vue.use(ElementUI);
new Vue({
    el: '#detail6',
    render: h => h(DetailList6)
});
