import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import DetailList7 from "./DetailList7.vue";
Vue.use(ElementUI);
new Vue({
    el: '#detail7',
    render: h => h(DetailList7)
});
