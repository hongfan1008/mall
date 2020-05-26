
<template>
    <el-col>
        <el-row type="flex" justify="center">
            <el-col :span="12">
                <head-top2/>
            </el-col>
            <el-col :span="12">
                <head-seacher/>
            </el-col>
        </el-row>
        <cart-table/>
        <foot/>
    </el-col>
</template>

<script>
    import axios from "axios";
    import {Message} from "element-ui";
    import CartTable from "./components/CartTable";
    import HeadTop2 from "./components/head/HeadTop2";
    import Foot from "./components/foot/Foot";
    import HeadSeacher from "./components/head/HeadSeacher";

    export default {
        name: 'cart',
        data() {
            return{
            }
        } ,
        components:{CartTable,HeadTop2,HeadSeacher,Foot}
    }



</script>

<style scoped>

</style>
