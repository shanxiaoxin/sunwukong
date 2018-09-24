<template>
    <div class="xitonggl">
        <div class="xt_box">
            <div class="xt_box_title">
                <span>系统参数设置后需重启才能生效</span>
            </div>
            <div>
                <template>
                    <el-table :data="tableData1" style="width: 100%" height="300" :border=true size="mini">
                        <el-table-column prop="configuration" label="配置项" width="170">
                        </el-table-column>
                        <el-table-column prop="id" label="ID" width="240">
                        </el-table-column>
                        <el-table-column prop="datatype" label="数据类型" width="70">
                        </el-table-column>
                        <el-table-column prop="price" label="值" width="60">
                        </el-table-column>
                        <el-table-column prop="describe" label="描述" width="395">
                        </el-table-column>
                    </el-table>
                </template>
            </div>
            <div class="xt_box_bottom">
                <div @click="myClick()">
                    <i class="el-icon-share"></i>保存设置
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'xitonggl',
        data() {
            return {
                tableData1: [{
                    configuration: "最大可提前预定时期(周)",
                    id: "MAX_ADVANCE_TIME",
                    datatype: "数字",
                    price: "3",
                    describe: "用户在会议预定日历上可操作最大预定时间,管理员无限制"
                }, {
                    configuration: "用户最多可预定数量",
                    id: "MAX_RESERVATION_NUM_PER_USER",
                    datatype: "数字",
                    price: "2",
                    describe: "用户在可预订是时间范围内,最多可同时预定的数量,管理员无限制"
                }, {
                    configuration: "最大保留时间(分钟)",
                    id: "MAX_RESERVATION_TIME",
                    datatype: "数字",
                    price: "1",
                    describe: "预定者超过此保留时间未抵达会议室,其他用户有权占用"
                }, {
                    configuration: "最大预定使用时间(小时)",
                    id: "MAX_USE_TIME",
                    datatype: "数字",
                    price: "12",
                    describe: "限制用户单词可预订的最大使用时间,管理员不限制"
                }]
            }
        },
        methods: {
            myClick() {
                this.$alert('操作成功！', '消息', {
                    confirmButtonText: '确定',
                    callback: action => {
                        // this.$message({
                        //     type: 'info',
                        //     message: `action: ${action}`
                        // });
                    }
                });
            }
        }

    }
</script>

<style>
    .xitonggl {
        width: 1700px;
        height: 868px;
        background-color: #e4e7e8;
    }

    .xt_box {
        width: 938px;
        height: 400px;
        margin: 0 auto;
        margin-top: 70px;
    }

    .xt_box_title {
        width: 100%;
        height: 39px;
        background-color: #333333;
        color: white;
    }

    .xt_box_title>span {
        text-align: left;
        height: 38px;
        line-height: 38px;
        padding: 0 10px;
        font-size: 14px;
    }

    .xt_box_bottom {
        width: 100%;
        height: 36px;
        text-align: right;
        line-height: 36px;
        background-color: white;
    }

    .xt_box_bottom>div {
        width: 80px;
        height: 28px;
        font-size: 12px;
        color: #333333;
        display: inline-block;
        text-align: center;
        line-height: 28px;
        border: 1px solid lightgray;
    }

    .xt_box_bottom>div:hover {
        background-color: lightgray;
    }
</style>