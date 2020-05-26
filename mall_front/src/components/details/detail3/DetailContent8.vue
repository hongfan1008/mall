<template>
    <div>
        <div class="detail">
            <img :src='require("@/assets/"+product.imgUrl)'>

        </div>
        <div class="detail1">
            <p>{{product.name}}</p>
            <p>价格：¥{{product.price}}</p>
            <p>  数量：<el-input-number v-model="product.num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            </p>
            <p>
                <el-button icon="el-icon-shopping-cart-1" type="danger" @click="addToCart()">加入购物车</el-button>
            </p>
        </div>
    </div>
</template>

<script>
    import {Message, MessageBox} from 'element-ui';
    import axios from "axios";
    export default {
        name: "DetailList1",
        data(){
            return{
                product:{
                    imgUrl:'32_classify.jpg',
                    num:1,
                    name:'时尚气质鱼尾散摆半裙',
                    price:'300'
                }
            }
        },
        methods:{
            handleChange(value){
                console.log(value);
                if(value==10){
                    Message.warning("限购10件")
                }
            },
            addToCart(){
                if (localStorage.getItem('user') == null){
                    alert("还没有登录，请登录");
                    window.location.href = '/login'
                }
                axios.post('/product/addCart',{
                    productName:this.product.name,
                    productPrice:this.product.price,
                    productQuantity:this.product.num,
                    productImage:this.product.imgUrl,
                    userName:JSON.parse(localStorage.getItem('user')).username

                })
                    .then(response=>{
                       alert("添加成功");
                    })
                    .catch(error =>{
                        console.log(error);
                    })
            },
        }
    }
</script>

<style scoped>

    img{
        transform: scale(2);
        padding-top: 72px;
        padding-left: 73px;
    }
    .detail{
        width: 450px;
        height: 500px;
        float: left;
    }
    .detail1{
        margin-left: 30px;
        width: 400px;
        height: 550px;
        float: left;
    }
    p{
        margin-left: 40px;
        padding-top: 25px;
    }
</style>
