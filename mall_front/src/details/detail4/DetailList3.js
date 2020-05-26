import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import DetailList3 from "./DetailList3.vue";
Vue.use(ElementUI);
new Vue({
    el: '#detail3',
    render: h => h(DetailList3)
});
