<template>
    <div class="yudinghys">
        <div class="yuding_box">
            <!-- 提示操作 -->
            <div class="yuding_prompt">
                <span class="yuding_prompt_span">操作提示</span>：筛选会议室之后，在日历中可直接框选时间段预定或提交申请。
            </div>
            <!-- 区域表头 -->
            <div class="yuding_title">
                <span>
                    <i class="el-icon-location"></i>区域
                </span>
                <span>
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <div class="xiala">
                            <el-form-item>
                                <el-select v-model="formInline.region" placeholder="北京市海淀区-奥北科技园">
                                    <el-option label="北京市海淀区-奥北科技园" value="1-1"></el-option>
                                    <el-option label="上海市浦东新区-张江高科" value="1-2"></el-option>
                                    <el-option label="上海市黄浦区-创智天地" value="1-3"></el-option>
                                    <el-option label="浙江省杭州市-创业大厦" value="1-4"></el-option>
                                    <el-option label="福建省厦门市-湖里高新技术园" value="1-5"></el-option>
                                    <el-option label="湖北省武汉市-光谷科技园" value="1-6"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </el-form>
                </span>
                <span>
                    <i class="el-icon-menu"></i>楼号
                </span>
                <span class="">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <div class="xiala">
                            <el-form-item>
                                <el-select v-model="formInline.region" placeholder="10-A座">
                                    <el-option label="10-A座" value="1-1"></el-option>
                                    <el-option label="10-B1" value="1-2"></el-option>
                                    <el-option label="10-B2" value="1-3"></el-option>
                                    <el-option label="12-A座" value="1-4"></el-option>
                                    <el-option label="12-B" value="1-5"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </el-form>
                </span>
                <span class="yuding_title_3">
                    层
                    <el-input v-model="input1" placeholder=""></el-input>
                </span>
                <span class="yuding_title_4">
                    <div>会议室编号</div>
                    <el-input v-model="input2" placeholder=""></el-input>
                </span>
                <span class="yuding_title_5">
                    <i class="el-icon-news"></i>容量
                    <div>
                        <el-input v-model="input3" placeholder="0"></el-input>
                        ~
                        <el-input v-model="input4" placeholder="999"></el-input>
                    </div>
                </span>
                <span class="yuding_title_5">
                    有投影仪
                    <el-checkbox v-model="checked1"></el-checkbox>
                </span>
                <span class="yuding_title_6">
                    有电视
                    <el-checkbox v-model="checked2"></el-checkbox>
                </span>
            </div>
            <!-- 楼号表格 -->
            <div>
                <template>
                    <el-table :data="tableData" style="width: 100%" stripe :highlight-current-row="true">
                        <el-table-column prop="building" label="楼号" width="180">
                        </el-table-column>
                        <el-table-column prop="floor" label="楼层" width="150">
                        </el-table-column>
                        <el-table-column prop="conference" label="会议室编号" width="180">
                        </el-table-column>
                        <el-table-column prop="name" label="名称" width="180">
                        </el-table-column>
                        <el-table-column prop="capacity" label="容量" width="180">
                        </el-table-column>
                        <el-table-column prop="television" label="电视" width="100">
                            <template slot-scope="scope">
                                <div>
                                    <i v-if="scope.row.isShow_1 == true" class="el-icon-close"></i>
                                    <i v-if="scope.row.isShow_1 == false" class="el-icon-check"></i>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="projection" label="投影" width="100">
                            <template slot-scope="scope">
                                <div>
                                    <i v-if="scope.row.isShow_2 == true" class="el-icon-close"></i>
                                    <i v-if="scope.row.isShow_2 == false" class="el-icon-check"></i>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="predetermine" label="开放预定" width="180">
                        </el-table-column>
                        <el-table-column prop="describe" label="描述" width="285">
                        </el-table-column>
                        <el-table-column prop="examine" label="查看" width="120">
                            <template slot-scope="scope">
                                <!-- <div @click="myClick_1(scope.$index)"> -->
                                <div @click="myClick_1($event,scope.row.conference,scope.$index)">
                                    <!-- <img class="el-icon-picture" @click="myClick($event)" alt=""> -->
                                    <i class="el-icon-picture"></i>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
            </div>
            <!-- 时间表头 -->
            <div class="sj_toolbar">
                <div class="sj_left">
                    <el-button-group>
                        <el-button type="primary" size="mini" icon="el-icon-caret-left" @click="myClick_2($event)"></el-button>
                        <el-button type="primary" size="mini" icon="el-icon-caret-right" @click="myClick_3($event)"></el-button>
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
                        <el-button type="primary" size="mini" @click="myClick_4($event)">月</el-button>
                        <el-button type="primary" size="mini" @click="myClick_5($event)">周</el-button>
                        <el-button type="primary" size="mini" @click="myClick_6($event)">日</el-button>
                    </el-button-group>
                </div>

            </div>
            <!-- 时间表格 -->
            <div>
                <template>

                    <el-table :data="tableData2" height="470" border style="width: 100%" size='mini'>
                        <el-table-column prop="date" label="" width="50" ui-widget-content>
                        </el-table-column>
                        <el-table-column prop="date_1" label="周六9月8日" width="230">
                        </el-table-column>
                        <el-table-column prop="date_2" label="周日9月9日" width="230">
                        </el-table-column>
                        <el-table-column prop="date_3" label="周一9月10日" width="230">
                        </el-table-column>
                        <el-table-column prop="date_4" label="周二9月11日" width="210">
                        </el-table-column>
                        <el-table-column prop="date_5" label="周六9月12日" width="210">
                        </el-table-column>
                        <el-table-column prop="date_6" label="周六9月13日" width="230">
                        </el-table-column>
                        <el-table-column prop="date_7" label="周六9月14日" width="230">
                        </el-table-column>
                    </el-table>
                </template>
            </div>

        </div>
        <div class="img_box">
            <div class="img_div"></div>
            <img src="../../assets/01.jpg" alt="">
            <div class="img_bottom" @click="myClick_7">
                <div>关闭</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "yudinghys",
        methods: {
            myClick_1(e, parem, index) {
                $('.img_div').html(parem)
                $('.img_box>img').attr('src', this.tableData[index].img)
                $('.img_box').css('display', "block")
            },
            // myClick_1: function (index) {

            //     console.log(index);



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
                $('.img_box').css('display', 'none')
            },

        },
        data() {
            return {
                formInline: {
                    user: "",
                    region: ""
                },
                input1: "",
                input2: "",
                input3: "",
                input4: "",
                input5: "",
                checked1: false,
                checked2: false,
                tableData: [
                    {
                        building: "10-A座",
                        floor: "1",
                        conference: "1-101",
                        name: "大会堂",
                        capacity: "999",
                        television: "",
                        projection: "",
                        predetermine: "否",
                        isShow_1: true,
                        isShow_2: true,
                        describe: "此会议室预定需要经管理员审批",
                        examine: "",
                        img: require('../../assets/01.jpg')
                    },
                    {
                        building: "10-A座",
                        floor: "2",
                        conference: "2-21",
                        name: "2-21",
                        capacity: "12",
                        television: "",
                        projection: "",
                        predetermine: "是",
                        isShow_1: false,
                        isShow_2: false,
                        describe: "",
                        examine: "",
                        img: require('../../assets/02.jpg')
                    },
                    {
                        building: "10-A座",
                        floor: "2",
                        conference: "2-22",
                        name: "2-22",
                        capacity: "10",
                        television: "",
                        projection: "",
                        predetermine: "是",
                        isShow_1: false,
                        isShow_2: true,
                        describe: "",
                        examine: "",
                        img: require('../../assets/03.jpg')
                    },
                    {
                        building: "10-A座",
                        floor: "3A",
                        conference: "3A-2A",
                        name: "3A-2A",
                        capacity: "12",
                        television: "",
                        projection: "",
                        predetermine: "是",
                        isShow_1: true,
                        isShow_2: false,
                        describe: "",
                        examine: "",
                        img: require('../../assets/04.jpg')
                    }
                ],
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
            };
        }
    };
</script>

<style>
    .yudinghys {
        width: 1700px;

        height: 868px;

        background-color: #e4e7e8;

        /* position: relative; */
    }

    .yuding_box {
        width: 1659px;
        height: 800px;
        margin: 0 auto;
        margin-top: 25px;
    }

    .yuding_prompt {
        width: 100%;
        background-color: #222;
        color: #eee;
        text-align: left;
        height: 38px;
        line-height: 38px;
    }

    .yuding_prompt_span {
        width: 66px;
        height: 22px;
        border: 1px solid #ffc200;
        font-size: 14px;
        padding: 0 8px;
        background-color: #ffc200;
    }

    /* 区域 */
    .yuding_title {
        width: 100%;
        height: 46px;
        background-color: #eee;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .yuding_title_2 {
        /* width: 150px; */
        border: 1px solid #222;
        background-color: #e4e7e8;
        height: 20px;
    }

    .yuding_title_3 {
        display: flex;
        justify-content: space-around;
    }

    .el-input__inner {
        width: 101px;
        height: 25px;
    }

    .yuding_title_4 {
        display: flex;
        justify-content: space-around;
    }

    .yuding_title_4>div {
        width: 84px;
    }

    .yuding_title_5 {
        display: flex;
    }

    .yuding_title_5>div {
        display: flex;
    }

    .xiala .el-input__inner {
        width: 240px;
    }

    .xiala {
        position: relative;
        top: 10px;
        left: -30px;
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

    .el-table__body tr.current-row>td {
        background: #ffc200 !important;
    }

    .img_box {
        width: 600px;
        height: 400px;
        border: 1px solid #222;
        z-index: 100;
        display: none;
        position: absolute;
        top: 26%;
        left: 37%;
    }

    .img_div {
        width: 100%;
        background-color: #222;
        color: #eee;
        text-align: left;
        height: 38px;
        line-height: 38px;

    }

    .img_box>img {
        width: 600px;
        height: 324px;
        display: block;
    }

    .img_bottom {
        width: 600px;
        height: 38px;
        background-color: lightgray;

    }

    .img_bottom>div {
        width: 46px;
        height: 28px;
        border: 1px solid rgb(161, 153, 153);
        margin: 0 auto;
        text-align: center;
        background-color: #e4e7e8;
    }
    .img_bottom>div:hover{
        background-color: rgb(167, 155, 155);
    }
</style>