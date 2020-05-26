<template>
    <el-col>
        <el-row type="flex" justify="center">
            <el-col :span="12" v-if="isLogin">
                <head-top2/>
            </el-col>
            <el-col :span="12" v-else>
                <head-top/>
            </el-col>
            <el-col :span="12">
                <head-seacher/>
            </el-col>
        </el-row>
        <product-content4/>

        <foot/>
    </el-col>
</template>

<script>
    var a;
    import HeadSeacher from "../components/head/HeadSeacher";
    import HeadTop from "../components/head/HeadTop";
   import ProductContent4 from "../components/product/ProductContent4";
    import Foot from "../components/foot/Foot";
    import HeadTop2 from "../components/head/HeadTop2";
    export default {
        name: "ProductList2",
        components:{HeadSeacher,HeadTop,ProductContent4,Foot,HeadTop2},
        data(){
            return{
                isLogin:false
            }
        },
        mounted:function () {
            a = localStorage.getItem("user");

            if (a == null){
                this.isLogin = false;
            }else {
                this.isLogin = true;
            }
        }
    }
</script>

<style scoped>

</style>
