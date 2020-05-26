import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ProductList3 from "./ProductList3.vue";
Vue.use(ElementUI);
new Vue({
    el: '#product3',
    render: h => h(ProductList3)
});
