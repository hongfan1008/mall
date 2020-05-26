import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import DetailList1 from "./DetailList1.vue";
Vue.use(ElementUI);
new Vue({
    el: '#detail1',
    render: h => h(DetailList1)
});
