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
        <content-home/>
        <foot/>
    </el-col>
</template>

<script>
    var a;
  import HeadTop from "./components/head/HeadTop";
  import HeadSeacher from "./components/head/HeadSeacher";
  import ContentHome from "./components/content/ContentHome";
  import Foot from "./components/foot/Foot";
  import HeadTop2 from "./components/head/HeadTop2";
  export default {
      components: { HeadTop,HeadSeacher,ContentHome,Foot,HeadTop2},
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
      },
      methods:{

      }
  }
</script>
<style scoped>
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
