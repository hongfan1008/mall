<template>
    <div class="cart_1">
        <p>您购物车商品如下：</p>
        <div class="cart">
            <el-table
                    :data="tableData"
                    style="width: 70%" border class="table">
                <el-table-column
                        label="商品ID"
                        width="80">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.productId }}</span>
                    </template>
                </el-table-column>

                <el-table-column
                        label="商品名字"
                        show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.productName }}</span>
                    </template>
                </el-table-column>

                <el-table-column
                        label="数量"
                        width="80">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.productQuantity }}</span>
                    </template>
                </el-table-column>

                <el-table-column
                        label="单价"
                        width="80">
                    <template slot-scope="scope" >
                        <span style="margin-left: 10px">{{ scope.row.productPrice }}</span>
                    </template>
                </el-table-column>


                <el-table-column label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="cart_btn">
            <ul>
                <li class="c">
                    <p class="total">总价:{{totalPrice}}</p>
                </li>
                <li>
                    <el-button class="cart_btn2" @click="shopping()">继续购物</el-button>
                </li>
                <li>
                    <el-button class="cart_btn2" @click="settleAccounts()">结算购物车</el-button>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import {Message} from "element-ui";

    export default {
        name: "cart_table",
        data() {
            return {
                tableData: [],
                multipleSelection: [],
                totalPrice:''
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log("index: "+index);
                console.log("row: "+row);
                this.$confirm(('确定删除？'), '', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    axios.post('/product/delete',{
                        userId:JSON.parse(localStorage.getItem('user')).id,
                        productId:this.tableData[index].productId
                    }).then((response)=>{
                        console.log(response.data);
                        axios.post("/product/findCart", {
                            userId: JSON.parse(localStorage.getItem('user')).id
                        })
                            .then(response => {
                                var cart = response.data;
                                this.tableData = cart;
                            })
                            .catch(error => {
                                Message.warning(error);
                            })
                    }).catch((error)=>{

                    })

                })
            },
            shopping(){
                window.location.href = '/index';
            },
            settleAccounts(){
                axios.post("/product/settleAccounts",{
                    userId:JSON.parse(localStorage.getItem('user')).id
                })
                    .then(success =>{
                        console.log(success.data.orderNumber);
                        localStorage.setItem("order_number",success.data.orderNumber);
                        window.location.href = '/payInfo';
                    })
                    .catch(error =>{
                        console.log(error);
                    })
            }

        },
        mounted: function () {
            var length1;

            axios.post("/product/findCart", {
                userId: JSON.parse(localStorage.getItem('user')).id
            })
                .then(response => {
                    var cart = response.data;
                    this.tableData = cart;
                    length1 = this.tableData.length;
                    console.log("length1: "+length1);
                    var totalPrice = 0;
                    for (var i=0; i<length1;i++){
                        totalPrice = totalPrice+(this.tableData[i].productPrice)*(this.tableData[i].productQuantity)
                    }
                    console.log(totalPrice);
                    this.totalPrice = totalPrice;
                })
                .catch(error => {
                    Message.warning(error);
                });

        }
    }
</script>

<style scoped>
    .cart{
        text-align: center;
        padding-left: 20px;
    }
    .table{

    }

    .cart_1{
        margin-top: 80px;
        /*margin-left: 300px;*/
        /*border: #f10180 1px solid;*/
        width: 100%;
        background-color: #e5e9f2;
    }

    ul {

        list-style-type: none;
        /*padding-left: 600px;*/
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }
    .cart_btn{
        text-align: center;

    }
    .cart_btn2{
        /*margin: auto;*/
        /*display: inline-block;*/
        float: right;
    }
    p{
        /*padding-right: 160px;*/
        /*padding-top: 0px;*/
    }
</style>
