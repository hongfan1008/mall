<template>

    <el-row type="flex" justify="center">
        <el-col :span="6">
            <div class="grid-content bg-purple">
                <el-input v-model="input" placeholder="请输入内容" @click="search()" prefix-icon="el-icon-search" ></el-input>
            </div>

        </el-col>
        <el-col :span="6">
            <el-button @click="search()" type="danger">搜索</el-button>

        </el-col>
        <el-col :span="12">
            <div class="grid-content">
                <el-button icon="el-icon-shopping-cart-1" type="danger" @click="isCart()">购物车</el-button>
            </div>
        </el-col>
    </el-row>



<!--    <div class="aa">-->
<!--        <ul>-->
<!--            <li class="li1">-->

<!--            </li>-->
<!--            <li>-->
<!--            </li>-->
<!--            <li class="li1">-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->
<!--    <div class="input">-->

<!--        <el-row type="flex" justify="center">-->
<!--            <el-col :span="12">-->
<!--                <div class="search" >-->
<!--                    </el-input>-->
<!--                </div>-->
<!--                <div class="search2" >-->
<!--                    -->

<!--                </div>-->
<!--            </el-col>-->
<!--            <el-col :span="12">-->
<!--                <div class="cart">-->
<!--                </div>-->
<!--            </el-col>-->
<!--        </el-row>-->

<!--    </div>-->


</template>

<script>
    import axios from "axios";
    export default {
        name: "HeadOrder",
        data() {
            return {
                input: ''
            }
        },
        created: function () {
            // 主页添加键盘事件,注意,不能直接在焦点事件上添加回车
            document.addEventListener("keydown", this.watchEnter);
        },
        destroyed() {
            //移除监听回车按键
            document.removeEventListener("keydown", this.watchEnter);
        },
        methods: {
            //监听回车按钮事件
            watchEnter(e) {
                let keyNum = e.which; //获取被按下的键值
                //判断如果用户按下了回车键（keycody=13）
                if (keyNum === 13) {
                    // 按下回车按钮要做的事
                    this.search();
                }
            },
            search(){
                axios.post('/product/search',{
                    productName:this.input
                })
                .then((response)=>{
                    localStorage.setItem('products', JSON.stringify(response.data));
                    console.log(JSON.stringify(response.data));
                    window.location.href='/search';


                }).catch((error)=>{
                    console.log(error);
                })
            },
            isCart(){
                if (localStorage.getItem('user') == null){
                    alert("还没有登录，请登录");
                    window.location.href = '/login'
                }
                else {
                    window.location.href = '/cart'
                }
                // window.location.href = '/cart'
            }
        }
    }
</script>

<style scoped>
    .input{
        /*width: 240px;*/
        /*width: 1000px;*/
        /*height: 50px;*/
    }
    .search2{
        float: left;
    }
    .search{
        float: left;
    }
    .cart{
        /*width: 300px;*/
        float: left;
        /*margin-left: 400px;*/
        text-align: right;
        border: black 1px solid;

    }

    ul {

        list-style-type: none;
        /*padding-left: 600px;*/
    }

    li {
        display: inline-block;
        /*margin: 0 10px;*/
    }
    .li1{

    }
    a{
        text-decoration: none;
        color: #2c3e50;
        font-size: 14px;
    }
    .aa {
        /*text-align: center;*/

        border: #f10180 solid 1px;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
        text-align: center;
    }
</style>
