<template>
    <div class="yudingsp">
        <div class="wo_title">
            <i class="el-icon-star-on"></i>特殊预定审批列表
        </div>
        <div>
            <template>
                <el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}" size='mini' height="260">
                    <el-table-column prop="id" label="ID" sortable width="80">
                    </el-table-column>
                    <el-table-column prop="time" label="会议室" sortable width="140">
                    </el-table-column>
                    <el-table-column prop="reasons" label="容量" sortable width="240">
                    </el-table-column>
                    <el-table-column prop="building" label="申请人" sortable width="100">
                    </el-table-column>
                    <el-table-column prop="tier" label="申请时间" sortable width="150">
                    </el-table-column>
                    <el-table-column prop="conferenceroom" label="事由" sortable width="150">
                    </el-table-column>
                    <el-table-column prop="capacity" label="状态" sortable width="180">
                    </el-table-column>
                    <el-table-column prop="starttime" label="批复" sortable width="180">
                    </el-table-column>
                    <el-table-column prop="endtime" label="审批人" sortable width="180">
                    </el-table-column>
                    <el-table-column prop="television" label="操作" sortable width="200">
                    </el-table-column>
                </el-table>
            </template>
            <div class="wo_bottom">
                <div class="wo_bottom_left">
                    <div @click="myClick_1($event)">
                        <i class="el-icon-search"></i>搜索
                    </div>
                    <div @click="myClick_2($event)">
                        <i class="el-icon-refresh"></i>刷新
                    </div>
                </div>
                <div class="wo_bottom_senter">
                    <el-pagination small layout="prev, pager, next" :total="50">
                    </el-pagination>
                </div>
                <div class="wo_bottom_right">无数据显示</div>
            </div>
        </div>
        <div class="win_title">
            <span class="win_title_1" style="font-size: 14px;"> 预定及申请情况一览。图例：</span>
            <span class="win_title_2" style="font-size:12px;padding:1px 2px;margin-right:2px">当前申请</span>
            <span class="win_title_3" style="font-size:12px;padding:1px 2px;margin-right:2px">已预定</span>
            <span class="win_title_4" style="font-size:12px;padding:1px 2px;margin-right:2px">其他申请</span>
        </div>
        <!-- 时间表头 -->
        <div class="sj_toolbar">
            <div class="sj_left">
                <el-button-group>
                    <el-button type="primary" size="mini" icon="el-icon-caret-left" @click="myClick_3($event)"></el-button>
                    <el-button type="primary" size="mini" icon="el-icon-caret-right" @click="myClick_4($event)"></el-button>
                </el-button-group>
                <el-row>
                    <el-button size="mini" disabled>今天</el-button>
                </el-row>
            </div>
            <div class="sj_center">
                <h2>2018年9月8 – 14日</h2>
            </div>
            <div class="sj_right">
                <el-button-group>
                    <el-button type="primary" size="mini" @click="myClick_5($event)">月</el-button>
                    <el-button type="primary" size="mini" @click="myClick_6($event)">周</el-button>
                    <el-button type="primary" size="mini" @click="myClick_7($event)">日</el-button>
                </el-button-group>
            </div>
        </div>
        <!-- 时间表格 -->
        <div>
            <template>
                <el-table :data="tableData2" height="461" border style="width: 100%" size='mini'>
                    <el-table-column prop="date" label="" width="50">
                    </el-table-column>
                    <el-table-column prop="date_1" label="周六9月8日" width="230">
                    </el-table-column>
                    <el-table-column prop="date_2" label="周日9月9日" width="230">
                    </el-table-column>
                    <el-table-column prop="date_3" label="周一9月10日" width="230">
                    </el-table-column>
                    <el-table-column prop="date_4" label="周二9月11日" width="240">
                    </el-table-column>
                    <el-table-column prop="date_5" label="周六9月12日" width="240">
                    </el-table-column>
                    <el-table-column prop="date_6" label="周六9月13日" width="230">
                    </el-table-column>
                    <el-table-column prop="date_7" label="周六9月14日" width="230">
                    </el-table-column>
                </el-table>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'yudingsp',
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
                tableData2: [{
                    date: '全天',
                    date_1: '',
                    date_2: '',
                    date_3: '',
                    date_4: '',
                    date_5: '',
                    date_6: '',
                    date_7: '',
                }, {
                    date: '08',
                    date_1: '',
                    date_2: '',
                    date_3: '',
                    date_4: '',
                    date_5: '',
                    date_6: '',
                    date_7: '',
                }, {
                    date: '09',
                    date_1: '',
                    date_2: '',
                    date_3: '',
                    date_4: '',
                    date_5: '',
                    date_6: '',
                    date_7: '',
                }, {
                    date: '10',
                    date_1: '',
                    date_2: '',
                    date_3: '',
                    date_4: '',
                    date_5: '',
                    date_6: '',
                    date_7: '',
                }, {
                    date: '11',
                    date_1: '',
                    date_2: '',
                    date_3: '',
                    date_4: '',
                    date_5: '',
                    date_6: '',
                    date_7: '',
                }, {
                    date: '12',
                    date_1: '',
                    date_2: '',
                    date_3: '',
                    date_4: '',
                    date_5: '',
                    date_6: '',
                    date_7: '',
                }, {
                    date: '13',
                    date_1: '',
                    date_2: '',
                    date_3: '',
                    date_4: '',
                    date_5: '',
                    date_6: '',
                    date_7: '',
                }, {
                    date: '14',
                    date_1: '',
                    date_2: '',
                    date_3: '',
                    date_4: '',
                    date_5: '',
                    date_6: '',
                    date_7: '',
                }, {
                    date: '15',
                    date_1: '',
                    date_2: '',
                    date_3: '',
                    date_4: '',
                    date_5: '',
                    date_6: '',
                    date_7: '',
                }, {
                    date: '16',
                    date_1: '',
                    date_2: '',
                    date_3: '',
                    date_4: '',
                    date_5: '',
                    date_6: '',
                    date_7: '',
                }, {
                    date: '17',
                    date_1: '',
                    date_2: '',
                    date_3: '',
                    date_4: '',
                    date_5: '',
                    date_6: '',
                    date_7: '',
                }, {
                    date: '18',
                    date_1: '',
                    date_2: '',
                    date_3: '',
                    date_4: '',
                    date_5: '',
                    date_6: '',
                    date_7: '',
                }, {
                    date: '19',
                    date_1: '',
                    date_2: '',
                    date_3: '',
                    date_4: '',
                    date_5: '',
                    date_6: '',
                    date_7: '',
                }, {
                    date: '20',
                    date_1: '',
                    date_2: '',
                    date_3: '',
                    date_4: '',
                    date_5: '',
                    date_6: '',
                    date_7: '',
                }, {
                    date: '21',
                    date_1: '',
                    date_2: '',
                    date_3: '',
                    date_4: '',
                    date_5: '',
                    date_6: '',
                    date_7: '',
                }, {
                    date: '22',
                    date_1: '',
                    date_2: '',
                    date_3: '',
                    date_4: '',
                    date_5: '',
                    date_6: '',
                    date_7: '',
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
            myClick_2(e) {
                alert('xxxx')
            },
            myClick_3(e) {
                alert('xxxx')
            },
            myClick_4(e) {
                alert('xxxx')
            },
            myClick_5(e) {
                alert('xxxx')
            },
            myClick_6(e) {
                alert('xxxx')
            },
            myClick_7(e) {
                alert('xxxx')
            },

        }


    }
</script>

<style>
    .yudingsp {
        width: 1700px;

        height: 868px;

        background-color: #e4e7e8;
    }

    .wo_title,
    .win_title {
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
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .wo_bottom_left {
        display: flex;

    }

    .wo_bottom_left div {
        font-size: 12px;

        padding: 0;

        margin: 0;

        list-style: none;

        float: left;
    }

    .wo_bottom_left div:hover {
        font-weight: 900;
    }

    .wo_bottom_right {
        font-weight: 400;

        height: 19px;

        margin-top: 3px;

        margin-right: 4px;
        font-size: 11px;
    }

    .win_title span {
        display: inline-block;
        margin-top: 10px;
        margin-left: 10px;

    }

    .win_title_2 {
        background-color: red;
    }

    .win_title_3 {
        background-color: white;
        color: #333333;
    }

    .win_title_4 {
        background-color: gold;
    }

    .sj_toolbar {
        width: 100%;
        height: 30px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .sj_left {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>