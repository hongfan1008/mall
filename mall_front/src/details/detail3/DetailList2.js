import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import DetailList2 from "./DetailList2.vue";
Vue.use(ElementUI);
new Vue({
    el: '#detail2',
    render: h => h(DetailList2)
});
