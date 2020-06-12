<template>
    <div>
        <img src="@/assets/01_index.jpg" class="img">
        <div class="classify">
            <el-divider content-position="center">热门分类</el-divider>

            <div>
                <ul>
                    <li class="classify_list_0" @click="search()">连衣裙</li>
                    <li class="classify_list_1" @click="search1()">短袖</li>
                    <li class="classify_list_1" @click="search2()">裤子</li>
                    <li class="classify_list_1" @click="search3()">衬衫</li>
                    <li class="classify_list_1" @click="search4()">外套</li>
                    <li class="classify_list_1" @click="search5()">半裙</li>
                </ul>
            </div>
            <el-divider content-position="center">品牌特卖</el-divider>
        </div>
        <div class="content">
            <el-row>
                <el-col :span="12">
                    <a href="/dunnu">
                        <img src="@/assets/09_index.jpg">
                        <p>敦奴DUNNU女装专场</p>
                    </a>
                </el-col>
                <el-col :span="12" align="right">
                    <a href="/gzg">
                        <img src="@/assets/10_index.jpg">
                        <p>歌中歌女装专场</p>
                    </a>
                </el-col>
            </el-row>
        </div>

        <div class="content">
            <el-row>
                <el-col :span="12">
                    <a href="/lako">
                        <img src="@/assets/11_index.jpg">
                        <p>La Koradior女装专场</p>
                    </a>
                </el-col>
                <el-col :span="12" align="right">
                    <a href="/jefen">
                        <img src="@/assets/12_index.jpg">
                        <p>吉芬JEFEN女装今日大牌专场</p>
                    </a>
                </el-col>
            </el-row>
        </div>

    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "ContentHome",
        data(){
            return{
                text1:'连衣裙',
                text2:'短袖',
                text3:'裤子',
                text4:'衬衫',
                text5:'外套',
                text6:'半裙',
            }
        },
        methods:{
            search(){
                axios.post('/product/search',{
                    productName:this.text1
                })
                    .then((response)=>{
                        localStorage.setItem('products', JSON.stringify(response.data));
                        console.log(JSON.stringify(response.data));
                        window.location.href='/search';


                    }).catch((error)=>{
                    console.log(error);
                })
            },
            search1(){
                axios.post('/product/search',{
                    productName:this.text2
                })
                    .then((response)=>{
                        localStorage.setItem('products', JSON.stringify(response.data));
                        console.log(JSON.stringify(response.data));
                        window.location.href='/search';


                    }).catch((error)=>{
                    console.log(error);
                })
            },
            search2(){
                axios.post('/product/search',{
                    productName:this.text3
                })
                    .then((response)=>{
                        localStorage.setItem('products', JSON.stringify(response.data));
                        console.log(JSON.stringify(response.data));
                        window.location.href='/search';


                    }).catch((error)=>{
                    console.log(error);
                })
            },
            search3(){
                axios.post('/product/search',{
                    productName:this.text4
                })
                    .then((response)=>{
                        localStorage.setItem('products', JSON.stringify(response.data));
                        console.log(JSON.stringify(response.data));
                        window.location.href='/search';


                    }).catch((error)=>{
                    console.log(error);
                })
            },
            search4(){
                axios.post('/product/search',{
                    productName:this.text5
                })
                    .then((response)=>{
                        localStorage.setItem('products', JSON.stringify(response.data));
                        console.log(JSON.stringify(response.data));
                        window.location.href='/search';


                    }).catch((error)=>{
                    console.log(error);
                })
            },
            search5(){
                axios.post('/product/search',{
                    productName:this.text6
                })
                    .then((response)=>{
                        localStorage.setItem('products', JSON.stringify(response.data));
                        console.log(JSON.stringify(response.data));
                        window.location.href='/search';


                    }).catch((error)=>{
                    console.log(error);
                })
            },

        }
    }

</script>

<style scoped>
    .img{
        width: 100%;
        height: 100%;
    }
    .classify{
        /*border: #ff6f8a 1px solid;*/
        /*height: 300px;*/
        width: 800px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;

    }
    .classify_list_0{
        font-size: 16px;
        color: #fff;
        text-align: center;
        width: 180px;
        line-height: 60px;
        height: 60px;
        border-top: 1px solid #fff;
        background-color: #ff6f8a;
        cursor: pointer;
        position: relative;
        padding-top: 0;
    }
    .classify_list_1{
        font-size: 16px;
        color: #fff;
        text-align: center;
        width: 180px;
        line-height: 60px;
        height: 60px;
        border-top: 1px solid #fff;
        background-color: #ff6f8a;
        cursor: pointer;
        position: relative;
    }
    .content{
        /*border: #ff6f8a 1px solid;*/
        height: auto;
        width: 1200px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    p{
        text-align: center;
    }
    a{
        text-decoration: none;
    }
    .classify_img li{
        display: inline-block;
        margin: 0 40px;
        /*padding-left: 50px;*/
        text-align: left;
    }
    ul {

        list-style-type: none;
        /*padding-left: 600px;*/
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

</style>
