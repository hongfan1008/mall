<template>
    <div class="login" clearfix>
        <div class="login-wrap">
            <el-row type="flex" justify="center">
                <el-form ref="form" :model="user" :rules="rules" status-icon label-width="80px">
                    <h3>登录</h3>
                    <hr>
                    <el-form-item prop="username" label="用户名">
                        <el-input v-model="user.username" placeholder="请输入用户名" prefix-icon></el-input>
                    </el-form-item>
                    <el-form-item id="password" prop="password" label="密码">
                        <el-input v-model="user.password" show-password placeholder="请输入密码"></el-input>
                    </el-form-item>
<!--                    <router-link to="/register">注册账号</router-link>-->
                        <el-form-item>
                            <el-button class="el-button" type="primary"  @click="submit('form')">登 录</el-button>
                        </el-form-item>
                    <div class="msg">
                        {{msg}}
                    </div>
                </el-form>
            </el-row>
        </div>
        <div class="footer">
            <p>Copyright 2008-2020 vip.com，All Rights Reserved ICP证：粤 B2-20080329</p>
        </div>
    </div>
</template>

<script>
    var a;
    import axios from "axios";
    import {Message, MessageBox} from 'element-ui';
    export default {
        name: "login",
        data() {
            return {
                user: {
                    username: "",
                    password: ""
                },
                rules: {
                    username: [
                        {required: true, message: "请输入用户名", trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: "请输入密码", trigger: 'blur'},
                        {min: 6, max: 20, message: "长度在6到20个字符", trigger: 'blur'}
                    ]
                },
                msg:''

            };

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
                    this.submit('form');
                }
            },
            submit(form) {
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        axios.post('/user/login',{
                            username:this.user.username,
                            password:this.user.password
                        })
                            .then((response)=>{
                                if(typeof (response.data) == 'string'){
                                    Message.warning(response.data);
                                }
                                else {
                                    localStorage.setItem('user', JSON.stringify(response.data[0]));
                                    window.location.href = '/index';
                                }
                            })
                            .catch(function(error){
                                console.log(error);
                            })
                    } else {
                        alert("error");
                    }
                });
            },
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login {
        width: 100%;
        height: 600px;
        background-image: url("../assets/logo_login.jpg");
        background-size: cover;
        overflow: hidden;

    }
    .login-wrap {
        /*background: url("./assets/logo.png") no-repeat;*/
        background-size: cover;
        background-color: #ffffff;
        width: 400px;
        height: 350px;
        margin-left: 60px;
        margin-top: 100px;
        overflow: hidden;
        padding-top: 10px;
        line-height: 40px;
    }
    #password {
        margin-bottom: 5px;
    }
    h3 {
        color: #0babeab8;
        font-size: 24px;
        text-align: center;
    }
    hr {
        background-color: #444;
        margin: 20px auto;
    }
    a {
        text-decoration: none;
        color: #aaa;
        font-size: 15px;
    }
    a:hover {
        color: coral;
    }
    .el-button {
        width: 80%;
        margin-left: 15px;
        margin-top: 20px;
    }
    .footer{
        /*border: #2c3e50 1px solid;*/
        position: absolute;
        bottom: 0px;
        margin: 0 auto;
        text-align: center;
        width: 96%;
        color: #2c3e50;
        font-size: 12px;


    }

</style>
