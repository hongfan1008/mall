import Vue from 'vue'
import VueRouter from 'vue-router'
import HeadTop from "../components/head/HeadTop";
import Register from "../register/Register.vue";
import Login from "../login/Login.vue";
import ProductList from "../productList/ProductList.vue";
import App from "../App";

Vue.use(VueRouter);
  const routes = [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
    ];
const router = new VueRouter({
   routes
});

export default router
