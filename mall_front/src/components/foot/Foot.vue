<template>
    <div class="container">
        <div class="foot1">
            <el-row>
                <el-col :span="6" align="center">
                    <img src="@/assets/icon1.png">
                    <h6>全球领先</h6>
                </el-col>
                <el-col :span="6" align="center">
                    <img src="@/assets/icon2.png">
                    <h6>正品货源</h6>
                </el-col>
                <el-col :span="6" align="center">
                    <img src="@/assets/icon3.png">
                    <h6>全球直裁</h6>
                </el-col>
                <el-col :span="6" align="center">
                    <img src="@/assets/icon4.png">
                    <h6>自营仓储</h6>
                </el-col>
<!--                <el-col :span="3">-->
<!--                    <img src="@/assets/icon1.png">-->
<!--                    <h6>入仓检验</h6>-->
<!--                </el-col>-->
<!--                <el-col :span="3">-->
<!--                    <img src="@/assets/icon2.png">-->
<!--                    <h6>正品保险</h6>-->
<!--                </el-col>-->
<!--                <el-col :span="3">-->
<!--                    <img src="@/assets/icon3.png">-->
<!--                    <h6>无忧退换</h6>-->
<!--                </el-col>-->
<!--                <el-col :span="3">-->
<!--                    <img src="@/assets/icon4.png">-->
<!--                    <h6>万千信赖</h6>-->
<!--                </el-col>-->
            </el-row>
        </div>
        <div class="foot2">
            <el-row align="left">
                <el-col :span="6" align="left">
                    <p>服务保障</p>
                    <ul>
                        <li>正品保证</li>
                        <li>7天无理由放心退</li>
                        <li>7x15小时客户服务</li>
                        <li>7天无理由随心换</li>
                    </ul>
                </el-col>
                <el-col :span="6">
                    <p>购物指南</p>
                    <ul>
                        <li>导购演示</li>
                        <li>订单操作</li>
                        <li>会员注册</li>
                        <li>账户管理</li>
                        <li>收货样品</li>
                        <li>会员等级</li>
                    </ul>
                </el-col>
                <el-col :span="6">
                    <p>配送方式</p>
                    <ul>
                        <li>配送范围及运费</li>
                        <li>验货与签收</li>
                    </ul>
                </el-col>
                <el-col :span="6">
                    <p>售后服务</p>
                    <ul>
                        <li>退货政策</li>
                        <li>退货流程</li>
                        <li>退款方式和时效</li>
                        <li>换货服务</li>
                    </ul>
                </el-col>
            </el-row>
        </div>
        <div class="foot3">

<!--            <el-row>-->
<!--                <el-col :span="3" align="center">-->
<!--                    <span>关于我们</span>-->
<!--                    <el-divider direction="vertical"></el-divider>-->
<!--                </el-col>-->
<!--                <el-col :span="3" align="center">-->
<!--                    <span>About us</span>-->
<!--                    <el-divider direction="vertical"></el-divider>-->
<!--                </el-col >-->
<!--                <el-col :span="3" align="center">-->
<!--                    <span>Investor Relations</span>-->
<!--                    <el-divider direction="vertical"></el-divider>-->
<!--                </el-col>-->
<!--                <el-col :span="3" align="center">-->
<!--                    <span>媒体报道</span>-->
<!--                    <el-divider direction="vertical"></el-divider>-->
<!--                </el-col>-->
<!--                <el-col :span="3" align="center">-->
<!--                    <span>品牌招商</span>-->
<!--                    <el-divider direction="vertical"></el-divider>-->
<!--                </el-col>-->
<!--                <el-col :span="3" align="center">-->
<!--                    <span>隐私条款</span>-->
<!--                    <el-divider direction="vertical"></el-divider>-->
<!--                </el-col>-->
<!--                <el-col :span="3" align="center">-->
<!--                    <span>funeral诚聘</span>-->
<!--                    <el-divider direction="vertical"></el-divider>-->
<!--                </el-col>-->
<!--                <el-col :span="3" align="center">-->
<!--                    <span>联系我们</span>-->
<!--                </el-col>-->
<!--            </el-row>-->
                    <div class="foot4">
                        <span>关于我们</span>

                        <span>About us</span>
                        <el-divider direction="vertical"></el-divider>

                        <span>Investor Relations</span>
                        <el-divider direction="vertical"></el-divider>


                        <span>媒体报道</span>
                        <el-divider direction="vertical"></el-divider>

                        <span>品牌招商</span>
                        <el-divider direction="vertical"></el-divider>

                        <span>隐私条款</span>
                        <el-divider direction="vertical"></el-divider>


                        <span>funeral诚聘</span>
                        <el-divider direction="vertical"></el-divider>

                        <span>联系我们</span>

                    </div>

        </div>
        <div>
            <p>
                Copyright © 2008-2020 vip.com，All Rights Reserved  使用本网站即表示接受 唯品会用户协议。版权所有 广州唯品会电子商务有限公司
            </p>
            <p>
                粤公网安备 44010302111111号    粤ICP备08114786号 增值业务经营许可证：粤B2-20170777 网络文化经营许可证：粤网文〔2018〕5030-1743号
            </p>
            <p>
                经营主体证照   风险监测信息   互联网药品信息服务资格证书：（粤）-经营性-2018-0271 网络食品交易第三方平台备案凭证：粤B2-20170777 医疗器械网络交易服务第三方平台备案
            </p>
            <p>
                凭证：（粤）网械平台备字[2019]第00001号
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Foot"
    }
</script>

<style scoped>
    .foot1{
        height: auto;
        width: 1200px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    .foot2{
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
    ul{
        padding-left: 125px;
        list-style-type: none;
        text-align: left;
        font-size: 12px;
        color: gray;
    }
    span{
        font-size: 12px;
        color: white;
        text-align: center ;
    }
    .foot3{
        width: 1200px;
        height: auto;
        background-color: #f10180;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    .foot4{
        text-align: center;
    }
    p{
        font-size: 12px;
        color: gray;
    }
    h6{
        color: #444444;
        font-weight: normal;
    }
</style>
