<template>
    <div>
        <img src="@/assets/01_index.jpg" class="img">
<!--        <el-divider content-position="center">热门分类</el-divider>-->
        <div class="classify">
            <div class="classify_left">
                <ul class="classify_list">
                    <li class="classify_list_0">裙装/套装</li>
                    <li class="classify_list_1">女上装</li>
                    <li class="classify_list_2">女下装</li>
                    <li class="classify_list_3">女式外套</li>
                    <li class="classify_list_4">家居服</li>
                </ul>
            </div>
            <div class="classify_right">
                <ul class="classify_img">
                    <li>
                            <div>
                                <img src="@/assets/01_img.webp">
                            </div>
                            <div class="p">连衣裙</div>
                    </li>
                    <li>
                        <div>
                            <img src="@/assets/02_img.webp">
                        </div>
                        <div class="p">
                            套装
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="@/assets/03_img.webp">
                        </div>
                        <div class="p">
                            半身裙
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="@/assets/04_img.webp">
                        </div>
                        <div class="p">
                            纯色连衣裙
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="@/assets/05_img.webp">
                        </div>
                        <div class="p">
                            雪纺/蕾丝裙
                        </div>
                    </li>

                    <li>
                        <div>
                            <img src="@/assets/06_img.webp">
                        </div>
                        <div class="p">
                            A字裙
                        </div>
                    </li>

                    <li>
                        <div>
                            <img src="@/assets/07_img.webp">
                        </div>
                        <div class="p">
                            百褶裙
                        </div>
                    </li>
                </ul>
            </div>
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
    export default {
        name: "ContentHome"
    }

</script>

<style scoped>
    .img{
        width: 100%;
        height: 100%;
    }
    .classify{
        border: #ff6f8a 1px solid;
        height: 300px;
        width: 1200px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;

    }
    .classify_left{
        /*margin: 0;*/
        /*padding: 0;*/
        float: left;
        width: 180px;
        height: 300px;


    }
    .classify_right{
        /*border: 1px solid blue;*/
    }
    .classify_list{
        list-style-type: none;
        margin: 0;
        padding: 0;

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
    .classify_list_2{
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
    .classify_list_3{
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
    .classify_list_4{
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
    .p{
        font-size: 14px;
        color: #ff6f8a;
        margin-left: 20px;
    }
    .classify_img{
        list-style-type: none;
    }
    .classify_img li{
        display: inline-block;
        margin: 0 40px;
        /*padding-left: 50px;*/
        text-align: left;
    }

</style>
