import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ProductList4 from "./ProductList4.vue";
Vue.use(ElementUI);
new Vue({
    el: '#product4',
    render: h => h(ProductList4)
});
