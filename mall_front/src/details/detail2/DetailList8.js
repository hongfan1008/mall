import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import DetailList8 from "./DetailList8.vue";
Vue.use(ElementUI);
new Vue({
    el: '#detail8',
    render: h => h(DetailList8)
});
