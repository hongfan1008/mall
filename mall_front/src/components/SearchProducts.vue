<template>
    <div class="classify">
        <el-row>
            <el-col :span="6" v-for="(pro,index) in products" :key="index">
                <a :href="pro.url">
                    <img :src='require("../assets/"+pro.image)'>
                    <p>{{'¥'+pro.price}}</p>
                    <p>{{pro.name}}</p>
                </a>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "SearchProducts",
        data(){
            return{
                products:'',
                url:''
            }
        },
        mounted:function () {
           var products =  JSON.parse(localStorage.getItem("products"));
           this.products = products;
        }

    }
</script>

<style scoped>
    p{
        text-align: center;
    }
    .classify{
        text-align: center;
        /*border: #ff6f8a 1px solid;*/
        height: auto;
        width: 1200px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    a{
        text-decoration: none;
    }
</style>
