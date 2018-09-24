<template>
    <div class="wodeyd">
        <div class="wodeyd_box">
            <div class="wo_title">
                <i class="el-icon-success"></i>我的预定
            </div>
            <div>
                <template>
                    <el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}" size='mini' height="170">
                        <el-table-column prop="id" label="ID" sortable width="80">
                        </el-table-column>
                        <el-table-column prop="time" label="预定时间" sortable width="140">
                        </el-table-column>
                        <el-table-column prop="reasons" label="事由" sortable width="240">
                        </el-table-column>
                        <el-table-column prop="building" label="楼号" sortable width="100">
                        </el-table-column>
                        <el-table-column prop="tier" label="层" sortable width="100">
                        </el-table-column>
                        <el-table-column prop="conferenceroom" label="会议室名" sortable width="100">
                        </el-table-column>
                        <el-table-column prop="capacity" label="容量" sortable width="180">
                        </el-table-column>
                        <el-table-column prop="starttime" label="开始时间" sortable width="180">
                        </el-table-column>
                        <el-table-column prop="endtime" label="结束时间" sortable width="180">
                        </el-table-column>
                        <el-table-column prop="television" label="电视" sortable width="150">
                        </el-table-column>
                        <el-table-column prop="projection" label="投影" sortable width="150">
                        </el-table-column>

                    </el-table>
                </template>
            </div>
            <div class="wo_title">
                <i class="el-icon-star-on"></i>我的申请
            </div>
            <div>
                <template>
                    <el-table :data="tableData1" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}" size='mini' height="270">
                        <el-table-column prop="id" label="ID" sortable width="80">
                        </el-table-column>
                        <el-table-column prop="application" label="申请时间" sortable width="140">
                        </el-table-column>
                        <el-table-column prop="reasons" label="事由" sortable width="240">
                        </el-table-column>
                        <el-table-column prop="building" label="楼号" sortable width="100">
                        </el-table-column>
                        <el-table-column prop="tier" label="层" sortable width="100">
                        </el-table-column>
                        <el-table-column prop="conferenceroom" label="会议室名" sortable width="100">
                        </el-table-column>
                        <el-table-column prop="capacity" label="容量" sortable width="180">
                        </el-table-column>
                        <el-table-column prop="starttime" label="开始时间" sortable width="180">
                        </el-table-column>
                        <el-table-column prop="endtime" label="结束时间" sortable width="180">
                        </el-table-column>
                        <el-table-column prop="state" label="状态" sortable width="150">
                        </el-table-column>
                        <el-table-column prop="reply" label="批复" sortable width="150">
                        </el-table-column>
                    </el-table>
                </template>
            </div>
            <div class="wo_bottom" @click="myClick_1($event)">
                <span>继续申请预定会议室</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'wodeyd',
        data() {
            return {
                tableData: [{
                    id: '',
                    time: '',
                    reasons: '',
                    building: '',
                    tier: '',
                    conferenceroom: '',
                    capacity: '',
                    starttime: '',
                    endtime: '',
                    television: '',
                    projection: '',
                }, {
                    id: '',
                    time: '',
                    reasons: '',
                    building: '',
                    tier: '',
                    conferenceroom: '',
                    capacity: '',
                    starttime: '',
                    endtime: '',
                    television: '',
                    projection: '',
                }, {
                    id: '',
                    time: '',
                    reasons: '',
                    building: '',
                    tier: '',
                    conferenceroom: '',
                    capacity: '',
                    starttime: '',
                    endtime: '',
                    television: '',
                    projection: '',
                }, {
                    id: '',
                    time: '',
                    reasons: '',
                    building: '',
                    tier: '',
                    conferenceroom: '',
                    capacity: '',
                    starttime: '',
                    endtime: '',
                    television: '',
                    projection: '',
                }],
                tableData1: [{
                    id: '1',
                    application: '',
                    reasons: '',
                    building: '',
                    tier: '',
                    conferenceroom: '',
                    capacity: '',
                    starttime: '',
                    endtime: '',
                    state: '',
                    reply: '',
                }, {
                    id: '2',
                    application: '',
                    reasons: '',
                    building: '',
                    tier: '',
                    conferenceroom: '',
                    capacity: '',
                    starttime: '',
                    endtime: '',
                    state: '',
                    reply: '',
                }, {
                    id: '3',
                    application: '',
                    reasons: '',
                    building: '',
                    tier: '',
                    conferenceroom: '',
                    capacity: '',
                    starttime: '',
                    endtime: '',
                    state: '',
                    reply: '',
                }, {
                    id: '4',
                    application: '',
                    reasons: '',
                    building: '',
                    tier: '',
                    conferenceroom: '',
                    capacity: '',
                    starttime: '',
                    endtime: '',
                    state: '',
                    reply: '',
                }]
            }
        },
        methods: {
            formatter(row, column) {
                return row.address;
            },
            myClick_1(e) {
                alert('xxxx')
            },
        }

    }
</script>

<style>
    .wodeyd {
        width: 1700px;

        height: 868px;

        background-color: #e4e7e8;
    }

    .wodeyd_box {
        width: 1616px;
        height: 520px;
        margin: 0 auto;
        margin-top: 60px;
    }

    .wo_title {
        width: 100%;
        height: 39px;
        background-color: #333333;
        color: white;
    }

    .wo_title>i {
        padding: 10px;
    }

    .wo_bottom {
        width: 100%;
        height: 39px;
        color: #333333;
        background-color: white;
        text-align: center;
        line-height: 39px;
    }

    .wo_bottom>span {
        display: inline-block;
        font-size: 12px;
        text-align: center;
        font-weight: normal;
        line-height: 28px;
        width: 130px;
        height: 28px;
        border: 1px solid #e4e7e8;
        border-radius: 5%;
    }
    .wo_bottom>span:hover{
        background-color: lightgray;
        border: 1px solid #aaabac;
    }
</style>