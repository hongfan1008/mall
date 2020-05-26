<template>
    <div class="aa">
        <ul>
            <li class="font">
                {{username}}欢迎您
            </li>
            <li><a href="#" @click="logout()">注销</a></li>
        </ul>


    </div>
</template>

<script>
    export default {
        name: "HeadTop2",
        data(){
            return{
                username :(JSON.parse(localStorage.getItem("user")).username)
            }
        },
        methods:{
            logout(){
                window.location.href = '/index';

                localStorage.clear();
            }
        }


    }
</script>

<style scoped>
    ul {
        list-style-type: none;}

    li {
        display: inline-block;
        margin: 0 10px;
    }
    a{
        text-decoration: none;
        color: #2c3e50;
        font-size: 14px;
    }
    .font{
        color: #f10180;
        font-size: 15px;
    }
  .aa{
      /*margin-left: 800px;*/
      /*width: 500px;*/
      /*height: 30px;*/
      text-align: center;
  }




</style>
