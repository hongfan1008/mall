<template>


    <el-col>
        <el-row type="flex" justify="center">
            <el-col :span="12">
                <head-top/>
            </el-col>
            <el-col :span="12">
                <head-seacher/>
            </el-col>
        </el-row>
        <div>
            <p>{{username}}你好：</p>
            <p>您已支付成功，您的订单号为{{orderNumber}}</p>
            <el-button class="cart_btn2" @click="shopping()">继续购物</el-button>
        </div>
        <foot/>
    </el-col>



</template>

<script>
    import axios from 'axios';
    import HeadSeacher from "./components/head/HeadSeacher";
    import HeadTop2 from "./components/head/HeadTop2";
    import Foot from "./components/foot/Foot";

    export default {
        name: "PayInfo",
        data(){
            return{
                orderNumber:'',
                username:''
            }
        },
        components:{HeadTop2,HeadSeacher,Foot},
        methods:{
            shopping(){
                window.location.href = '/index';
            }
        },

        mounted: function () {
            axios.post("/product/findPayInfo",{
                orderNumber:localStorage.getItem('order_number')
            })
            .then(success =>{
                console.log("2222: "+success.data.orderNumber);
                this.orderNumber = success.data.orderNumber;
                this.username = JSON.parse(localStorage.getItem('user')).username;
                console.log("this.orderNumber"+this.orderNumber);
            })
            .catch(error =>{

            })
        }
    }
</script>

<style scoped>

</style>
