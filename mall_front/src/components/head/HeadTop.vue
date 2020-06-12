<template>
    <div class="aa">

        <ul>
            <li><h3>future女装网上商城</h3></li>
            <li><a href="/login">登录</a></li>
            <li><a href="/register">注册</a></li>
        </ul>


    </div>




</template>

<script>
export default {
  name: 'HeadTop',
    data(){
      return{
        input:''
      }
    },
    methods:{
      logout(){
          localStorage.removeItem('user');
      }
    }
}
</script>

<style scoped>
    ul {

        list-style-type: none;
        /*padding-left: 600px;*/
    }

    li {
        display: inline-block;
        margin: 0 40px;
    }
    a{
        text-decoration: none;
        color: #2c3e50;
        font-size: 14px;
    }
    .aa{
        text-align: center;
    }
    h3{
        color: #ff6f8a;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        font-size: 30px;
    }
</style>
