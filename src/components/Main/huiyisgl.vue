<template>
    <div class="huiyisgl">
        <div class="gl1_box">
            <div class="gl1_box_title">
                <span>会议室查询条件</span>
            </div>
            <div class="gl1_box_main">
                <!-- 区域表头 -->
                <div class="yuding_title">
                    <span>
                        区域
                    </span>
                    <span class="yuding_span">
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
                        楼号
                    </span>
                    <span class="yuding_span">
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
                    <div class="yuding_title_right">
                        <div class="div_1" @click="myClick_1($event)">
                            <i class="el-icon-circle-plus"></i>
                            添加区域建筑
                        </div>
                        <div @click="myClick_2($event)">Excel导入会议室</div>
                        <div class="div_3" @click="myClick_3($event)">
                            <i class="el-icon-circle-plus-outline"></i>
                            添加会议室
                        </div>
                    </div>
                </div>
            </div>
            <div class="gl1_box_title">
                <span>查询结果</span>
            </div>
            <!-- 楼号表格 -->
            <div>
                <template>
                    <el-table :data="tableData" style="width: 100%" height="710" :border=true :highlight-current-row="true">
                        <el-table-column prop="building" label="楼号" width="180">
                        </el-table-column>
                        <el-table-column prop="floor" label="楼层" width="150">
                        </el-table-column>
                        <el-table-column prop="conference" label="会议室编号" width="180">
                        </el-table-column>
                        <el-table-column prop="name" label="名称" width="100">
                        </el-table-column>
                        <el-table-column prop="capacity" label="容量" width="110">
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
                        <el-table-column prop="predetermine" label="开放预定" width="150">
                        </el-table-column>
                        <el-table-column prop="describe" label="描述" width="285">
                        </el-table-column>
                        <el-table-column prop="whether" label="是否可用" width="105">
                        </el-table-column>
                        <el-table-column prop="check" label="" width="180">
                            <template slot-scope="scope">
                                <div class="div_4">
                                    <i class="el-icon-delete" @click="myClick_4($event)"></i>
                                    <i class="el-icon-edit-outline" @click="myClick_5($event)"></i>
                                    <i class="el-icon-picture" @click="myClick_6($event,scope.row.conference,scope.$index)"></i>
                                </div>
                            </template>
                        </el-table-column>

                    </el-table>
                </template>
            </div>
        </div>
        <!-- 查看图片 -->
        <div class="img_box">
            <div class="img_div"></div>
            <img src="../../assets/01.jpg" alt="">
            <div class="img_bottom" @click="myClick_7">
                <div>关闭</div>
            </div>
        </div>
        <!-- 修改会议室 -->
        <div class="xg_box">
            <div class="xg_title">修改会议室</div>
            <div class="xg_main">
                <form action="#" method="GET">
                    <div class="xg_main_div">
                        <span>所属区域</span>
                        <select name="" id="" class="xg_main_1">
                            <option value="1-1">北京市海淀区-奥北科技园</option>
                            <option value="1-2">上海市浦东新区-张江高科</option>
                            <option value="1-3">上海市黄浦区-创智天地</option>
                            <option value="1-4">浙江省杭州市-创业大厦</option>
                            <option value="1-5">福建省厦门市-湖里高新技术园</option>
                            <option value="1-6">湖北省武汉市-光谷科技园</option>
                        </select>
                    </div>
                    <div class="xg_main_div">
                        <span>楼号</span>
                        <select name="" id="" class="xg_main_1">
                            <option value="1-1">10-A座</option>
                            <option value="1-2">10-B1</option>
                            <option value="1-3">10-B2</option>
                            <option value="1-4">12-A座</option>
                            <option value="1-5">12-B</option>
                            <option value="1-6">你猜猜</option>
                        </select>
                    </div>
                    <div class="xg_main_div">
                        <span>楼层</span>
                        <input class="xg_main_1" type="text" placeholder="请输入楼层号" value="3A" autocomplete="off">
                    </div>
                    <div class="xg_main_div">  
                        <span>会议室编号</span>
                        <input class="xg_main_1" type="text" placeholder="请输入会议室编号" value="3A-2A" autocomplete="off">
                    </div>
                    <div class="xg_main_div">
                        <span>会议室名称</span>
                        <input class="xg_main_1" type="text" autocomplete="off">
                    </div>
                    <div class="xg_main_div">
                        <span>容量</span>
                        <input class="xg_main_1" type="number" value="12">
                    </div>
                    <div class="xg_main_div">
                        <span>有电视机</span>
                        <input type="radio" name="dan" value="是">是
                        <input type="radio" name="dan" value="否">否
                    </div>
                    <div class="xg_main_div">
                        <span>有投影仪</span>
                        <input type="radio" name="tou" value="是">是
                        <input type="radio" name="tou" value="否">否
                    </div>
                    <div class="xg_main_div">
                        <span>允许开放预定</span>
                        <input type="radio" name="yun" value="是">是
                        <input type="radio" name="yun" value="否">否
                    </div>
                    <div class="xg_main_div">
                        <span>图片资料</span>
                        <input type="file" value="asdas">
                    </div>
                    <div class="xg_main_div">
                        <span>备注</span>
                        <textarea name="" id="" cols="38" rows="1"></textarea>
                    </div>
                    <div class="xg_main_div">
                        <span>启用</span>
                        <input type="radio" name="qi" value="是">是
                        <input type="radio" name="qi" value="否">否
                    </div>
                </form>
            </div>
            <div class="xg_bottom" @click="myClick_8($event)">
                <div class="xg_bottom_box">
                    <i class="el-icon-success"></i>
                    <span >修改</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'huiyisgl',
        methods: {
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
                // alert('xxxx')
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
            myClick_5(e) {
                $('.xg_box').css('display','block')
            },
            myClick_6(e, parem, index) {
                $('.img_box').css('display', "block")
                $('.img_div').html(parem)
                $('.img_box>img').attr('src', this.tableData[index].img)
                // alert(parem)
            },
            myClick_7(e) {
                $('.img_box').css('display', 'none')
            },
            myClick_8(e){
                $('.xg_box').css('display','none')
            }
        },
        data() {
            return {
                formInline: {
                    user: "",
                    region: ""
                },
                input1: "",
                input2: "",
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
                        whether: "是",
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
                        whether: "是",
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
                        whether: "是",
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
                        whether: "是",
                        img: require('../../assets/04.jpg')
                    }
                ],

            }
        }

    }
</script>

<style>
    .huiyisgl {
        width: 1700px;
        height: 868px;
        background-color: #e4e7e8;
    }

    .gl1_box {
        width: 1650px;
        height: 830px;
        margin: 0 auto;
        margin-top: 19px;
        background-color: lightcoral;
    }

    .gl1_box_title {
        width: 100%;
        height: 39px;
        background-color: #333333;
        color: white;
    }

    .gl1_box_title>span {
        text-align: left;
        height: 38px;
        line-height: 38px;
        padding: 0 10px;
        font-size: 14px;
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

    .xiala .el-input__inner {
        width: 240px;
    }

    .xiala {
        position: relative;
        top: 10px;
        left: -30px;
    }

    .yuding_title_right {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
    }

    .yuding_span {
        position: relative;
        left: -47px;
    }

    .div_1 {
        position: relative;
        left: -15px;
    }

    .div_3 {
        position: relative;
        left: 15px;
        background-color: pink;
    }

    .div_4 i {
        margin-left: 10px;
    }

    /* 查看图片  */
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

    .img_bottom>div:hover {
        background-color: rgb(167, 155, 155);
    }

    /* 修改会议室 */
    .xg_box {
        width: 540px;
        height: 600px;
        background-color: rgb(226, 223, 223);
        position: absolute;
        top: 26%;
        left: 37%;
        display: none;
    }

    .xg_title {
        width: 100%;
        background-color: #222;
        color: #eee;
        text-align: left;
        height: 38px;
        line-height: 38px;
    }

    .xg_main {
        width: 100%;
        height: 524px;
    }

    .xg_bottom {
        width: 100%;
        height: 36px;
        background-color: #e4e7e8;
        display: flex;
        align-items: center;
    }

    .xg_bottom_box {
        width: 58px;
        height: 24px;
        background-color: lightgray;
        margin: 0 auto;
        text-align: center;
        font-size: 12px;
        line-height: 24px;
        border: 1px solid rgb(161, 153, 153);
        
    }

    .xg_bottom_box:hover {
        background-color: rgb(187, 180, 180);
    }

    .xg_main_1 {
        width: 333px;
        height: 32px;
        border: 1px solid #eee;
        font-size: 12px;
    }
    .xg_main_div{
        padding: 0 10px;
    }
    .xg_main_div>span{
        display: inline-block;
        font-size: 12px;
        width: 100px;
        height: 36px;
    }
</style>