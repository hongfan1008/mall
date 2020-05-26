import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import DetailList5 from "./DetailList5.vue";
Vue.use(ElementUI);
new Vue({
    el: '#detail5',
    render: h => h(DetailList5)
});
