<template>
    <div>
        <div class="classify">
            <el-row>
                <el-col :span="6">
                    <a href="/detail13">
                        <img src="@/assets/13_classify.jpg">
                        <p>¥118</p>
                        <p>夏装新款女士针织衫短袖</p>
                    </a>
                </el-col>
                <el-col :span="6">
                    <a href="/detail14">
                        <img src="@/assets/14_classify.jpg">
                        <p>¥264</p>
                        <p>时尚雅致镂空舒适百搭空调衫短袖</p>
                    </a>
                </el-col>
                <el-col :span="6">
                    <a href="/detail15">
                        <img src="@/assets/15_classify.jpg">
                        <p>¥200</p>
                        <p>亚麻松紧腰系带双门襟设计宽松七分裤子</p>
                    </a>
                </el-col>
                <el-col :span="6">
                    <a href="/detail16">
                        <img src="@/assets/16_classify.jpg">
                        <p>¥300</p>
                        <p>百搭花色显瘦优雅连体裤子</p>
                    </a>
                </el-col>
            </el-row>
        </div>

        <div class="classify">
            <el-row>
                <el-col :span="6">
                    <a href="/detail17">
                        <img src="@/assets/17_classify.jpg">
                        <p>¥210</p>
                        <p>时尚收腰百搭优雅时尚连衣裙</p>
                    </a>
                </el-col>
                <el-col :span="6">
                    <a href="/detail18">
                        <img src="@/assets/18_classify.jpg">
                        <p>¥264</p>
                        <p>新品端庄优雅收腰半裙</p>
                    </a>
                </el-col>
                <el-col :span="6">
                    <a href="/detail19">
                        <img src="@/assets/19_classify.jpg">
                        <p>¥400</p>
                        <p>亚麻干练格子优雅上衣百搭气质女式外套</p>
                    </a>
                </el-col>
                <el-col :span="6">
                    <a href="/detail20">
                        <img src="@/assets/20_classify.jpg">
                        <p>¥300</p>
                        <p>新品女装气质女裙 中长款百搭时尚连衣裙</p>
                    </a>
                </el-col>
            </el-row>
        </div>






    </div>
</template>

<script>
    export default {
        name: "ProductContent2"
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
