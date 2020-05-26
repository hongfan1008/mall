<template>
    <div class="aa">
        <ul>
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
        margin: 0 10px;
    }
    a{
        text-decoration: none;
        color: #2c3e50;
        font-size: 14px;
    }
    .aa{
        text-align: center;
    }
</style>
