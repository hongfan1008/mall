import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ProductList from "./ProductList.vue";
Vue.use(ElementUI);
new Vue({
    el: '#product',
    render: h => h(ProductList)
});
