<template>
    <div class="quyujzwgl">
        <div class="jzw_box">
            <div class="jzw_left">
                <div class="jzw_box_title">
                    <span>区域列表</span>
                </div>
                <!-- 区域表格 -->
                <div>
                    <template>
                        <el-table :data="tableData" style="width: 100%" height="710" :border=true size="small" stripe :highlight-current-row="true">
                            <el-table-column prop="id" label="ID" width="80">
                            </el-table-column>
                            <el-table-column prop="name" label="区域名称" width="300">
                            </el-table-column>
                            <el-table-column prop="province" label="省/市区" width="200">
                            </el-table-column>
                            <el-table-column prop="site" label="地址" width="250">
                            </el-table-column>
                            <el-table-column prop="caozuo" label="" width="320">
                                <template slot-scope="scope">
                                    <div class="div_4">
                                        <span @click="myClick_1($event)"><i class="el-icon-delete"></i>删除</span>
                                        <span @click="myClick_2($event,scope.row.name,scope.$index)"><i class="el-icon-edit-outline"></i>修改</span>
                                        <span @click="myClick_3($event)"><i class="el-icon-circle-plus"></i>添加建筑</span>
                                    </div>
                                </template>
                            </el-table-column>

                        </el-table>
                    </template>
                </div>
                <div class="jzw_bottom">
                    <div>
                        <span class="jzw_span" @click="myClick_4($event)">
                            <i class="el-icon-share"></i>管理会议室
                        </span>
                        <span class="jzw_span" @click="myClick_5($event)">
                            <i class="el-icon-circle-plus"></i>添加区域
                        </span>
                    </div>
                </div>
            </div>
            <div class="jzw_right">
                <div class="jzw_right_title">
                    <!-- <span class="ui-state-active">奥北科技园</span> -->
                    <span class="jzw_right_span">北奥科技园</span>
                    <span>建筑一览</span>
                </div>
                <!-- 右边表格 -->
                <div>
                    <template>
                        <el-table :data="tableData1" style="width: 100%" height="746" :border=true size="small">
                            <el-table-column prop="garden" label="园区" width="150">
                            </el-table-column>
                            <el-table-column prop="number" label="编号" width="120">
                            </el-table-column>
                            <el-table-column prop="connumber" label="会议室数量" width="100">
                            </el-table-column>

                            <el-table-column prop="caozuo1" label="" width="120">
                                <template slot-scope="scope">
                                    <div class="div_4">
                                        <span @click="myClick_6($event)"><i class="el-icon-delete"></i></span>
                                        <span @click="myClick_7($event)"><i class="el-icon-edit-outline"></i></span>
                                    </div>
                                </template>
                            </el-table-column>

                        </el-table>
                    </template>
                </div>
                
            </div>
            
        </div>
        <div class="jzw_xiugai_1"></div>
    </div>
</template>

<script>
    export default {
        name: 'quyujzwgl',
        methods: {
            myClick_1(e) {
                this.$confirm('下属全部建筑物和会议室也将一并删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            myClick_2(e, parem, index) {
                // alert(parem)
                $('.jzw_right_span').html(parem)
            },
            myClick_3(e) {
                alert('xxxx')
            },
            myClick_4(e) {

            },
            myClick_5(e) {
                alert('xxxx')
            },
            myClick_6(e) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            myClick_7(e) {
                alert('xxxx')
            },

        },
        data() {
            return {
                tableData: [
                    {
                        id: "1",
                        name: "奥北科技园",
                        province: "北京市海淀区",
                        site: "北京市海淀区芳清园小区南门",
                        caozuo: ""
                    },
                    {
                        id: "2",
                        name: "创智天地",
                        province: "上海市黄浦区",
                        site: "大学路63号",
                        caozuo: ""
                    },
                    {
                        id: "3",
                        name: "张江高科",
                        province: "上海市浦东新区",
                        site: "科苑路399号",
                        caozuo: ""
                    },
                    {
                        id: "4",
                        name: "明谷科技园",
                        province: "上海市松江区",
                        site: "中春路7001号",
                        caozuo: ""
                    }
                ],
                tableData1: [{
                    garden: "北奥科技园",
                    number: "A-10座",
                    connumber: "7",
                    caozuo1: ""
                }, {
                    garden: "北奥科技园",
                    number: "10-B1",
                    connumber: "2",
                    caozuo1: ""
                }, {
                    garden: "北奥科技园",
                    number: "10-B2",
                    connumber: "1",
                    caozuo1: ""
                }, {
                    garden: "北奥科技园",
                    number: "12-A座",
                    connumber: "0",
                    caozuo1: ""
                }],
            }

        }


    }
</script>

<style>
    .quyujzwgl {
        width: 1700px;

        height: 868px;

        background-color: #e4e7e8;
        /* position: relative; */
        
    }

    .jzw_box {
        width: 1650px;
        height: 830px;
        margin: 0 auto;
        margin-top: 19px;
        display: flex;
    }

    .jzw_box_title {
        width: 100%;
        height: 39px;
        background-color: #333333;
        color: white;
    }

    .jzw_box_title>span {
        text-align: left;
        height: 38px;
        line-height: 38px;
        padding: 0 10px;
        font-size: 14px;
    }

    .div_4 span {
        margin-left: 10px;
    }

    .jze_left {
        width: 70%;
    }

    .jzw_right {
        width: 30%;
        /* position: absolute; */
    }

    .jzw_bottom {
        width: 100%;
        height: 36px;
        background-color: white;
    }

    .jzw_bottom>div {
        position: relative;
        left: 400px;
        top: 3px;
    }

    .jzw_span {
        display: inline-block;
        width: 94px;
        height: 28px;
        border: 1px solid #e4e7e8;
        font-size: 12px;
        height: 28px;
        line-height: 28px;
        text-align: center;
    }

    .jzw_span:hover {
        background-color: lightgrey;
    }

    /* 右边的表格 */
    .jzw_right_title {
        width: 100%;
        height: 39px;
        background-color: #333333;
        color: white;
        border-left: 2px solid #e4e7e8;
        /* padding: 0 10px; */
    }

    .jzw_right_title>span {
        height: 38px;
        line-height: 38px;
        font-size: 14px;
        margin-left: 5px;
    }

    .jzw_right_span {
        padding: 2px 4px;
        border-radius: 2px;
        font-size: smaller;
        background: #007aff;
    }
    .jzw_xiugai_1{
        width: 1683px;
        height: 868px;
        background-color: lightgray;
        position: absolute;
        top:59px ;
        left: 220px;
        z-index: 100;
        opacity: 0.6;
        display: none;

    }
</style>