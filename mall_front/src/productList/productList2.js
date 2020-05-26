import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ProductList2 from "./ProductList2.vue";
Vue.use(ElementUI);
new Vue({
    el: '#product2',
    render: h => h(ProductList2)
});
