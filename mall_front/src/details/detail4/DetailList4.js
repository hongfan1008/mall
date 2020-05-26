import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import DetailList4 from "./DetailList4.vue";
Vue.use(ElementUI);
new Vue({
    el: '#detail4',
    render: h => h(DetailList4)
});
