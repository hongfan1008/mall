<template>
    <div>
        <div class="classify">
            <el-row>
                <el-col :span="6">
                    <a href="/detail1">
                        <img src="@/assets/01_classify.jpg">
                        <p>¥118</p>
                        <p>优雅休闲女式阔腿裤七分裤</p>
                    </a>
                </el-col>
                <el-col :span="6">
                    <a href="/detail2">
                        <img src="@/assets/02_classify.jpg">
                        <p>¥264</p>
                        <p>敦奴时尚方格印花圆领短袖女士上衣</p>
                    </a>
                </el-col>
                <el-col :span="6">
                    <a href="/detail3">
                        <img src="@/assets/03_classify.jpg">
                        <p>¥200</p>
                        <p>时尚纯色蕾丝绣花长袖女士衬衫</p>
                    </a>
                </el-col>
                <el-col :span="6">
                    <a href="/detail4">
                        <img src="@/assets/04_classify.jpg">
                        <p>¥300</p>
                        <p>敦奴优雅长款圆领无袖女士连衣裙</p>
                    </a>
                </el-col>
            </el-row>
        </div>

        <div class="classify">
            <el-row>
                <el-col :span="6">
                    <a href="/detail5">
                        <img src="@/assets/05_classify.jpg">
                        <p>¥210</p>
                        <p>时尚优雅纯色阔腿裤女士休闲裤</p>
                    </a>
                </el-col>
                <el-col :span="6">
                    <a href="/detail6">
                        <img src="@/assets/06_classify.jpg">
                        <p>¥264</p>
                        <p>时尚净色优雅裤腿开叉女士休闲裤微喇裤女裤</p>
                    </a>
                </el-col>
                <el-col :span="6">
                    <a href="/detail7">
                        <img src="@/assets/07_classify.jpg">
                        <p>¥400</p>
                        <p>时尚中长款印花圆领中袖女士连衣裙</p>
                    </a>
                </el-col>
                <el-col :span="6">
                    <a href="/detail8">
                        <img src="@/assets/08_classify.jpg">
                        <p>¥300</p>
                        <p>圆领无袖女士短袖</p>
                    </a>
                </el-col>
            </el-row>
        </div>




    </div>
</template>

<script>
    export default {
        name: "ProductContent"
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
