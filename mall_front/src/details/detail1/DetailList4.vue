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
        <div class="detail">
            <detail-content4/>
        </div>
        <foot/>
    </el-col>
</template>

<script>
    var a;
    import DetailContent4 from "../../components/details/detail1/DetailContent4";
    import HeadTop from "../../components/head/HeadTop";
    import HeadTop2 from "../../components/head/HeadTop2";
    import HeadSeacher from "../../components/head/HeadSeacher";
    import Foot from "../../components/foot/Foot";


    export default {
        name: "DetailList4",
        components:{DetailContent4,HeadTop,HeadSeacher,Foot,HeadTop2},
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
    .detail{
        margin-left:200px;
        width: 900px;
        height: 600px;
    }
</style>
