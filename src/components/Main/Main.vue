<template>
    <div class="main_box">
        <div class="main_shouye">
            <div class="m_title">
                <div class="m_title_i">
                    <i class="el-icon-edit-outline"></i>会议室预定规则
                </div>
                <h2>                  
                    <p>
                        1. 最多允许提前 3 周（21天）预定。
                    </p>
                    <p>
                        2. 每人在 3 周之内最多可预定 5 次，超过 5 次无法继续预定
                    </p>
                    <p>
                        3. 非开放预定会议室，需要先在【预定会议室】中提交预定申请，管理员在后台审批通过后，预定才能生效。
                    </p>
                    <p>
                        4. 单次预定超过 3 个小时，需要先在【预定会议室】中提交预定申请，管理员在后台审批后，预定才能生效。
                    </p>
                    <p class="m_title_p">
                        5. 超过 15 分钟未按时间到达预定会议室，视为放弃使用，其他用户有权抢占。
                    </p>
                </h2>
            </div>
            <span class="m_i_1">
                <i class="el-icon-edit-outline left_jia" @mouseenter="yiru($event)" @mouseleave="yichu($event)"></i>
                <a href="#">预定会议室</a>
            </span>
            <span class="m_i_2">
                <i class="el-icon-star-on right_jia" @mouseenter="yiru($event)" @mouseleave="yichu($event)"></i>
                <a href="#">我的预定</a>
            </span>
        </div>
    </div>
</template>

<script>
// import shouye from './shouye';
export default {
  name: "Main",
 methods:{
     yiru(e){
        e.target.style.transform = 'rotate(-360deg)'
     },
     yichu(e){
         e.target.style.transform = 'rotate(0)';
     }
 },
  components: {}
}

</script>

<style>
.left_jia,.right_jia{
    transform: rotate(0);
    transition: all 0.3s;
}
.main_box {
  width: 1700px;

  height: 868px;

  background-color: lightgray;
}

.main_shouye {
  width: 880px;
  height: 700px;
  position: relative;
  left: 25%;
  top: 5%;
}

.m_title {
  width: 880px;
  height: 210px;
  /* background-color: red; */
}

.m_title > h2 {
  text-align: left;

  font-size: 15px;

  font-weight: 100;

  line-height: 32px;
}

.m_title_p {
  background-color: bisque;
}

.m_i_1,
.m_i_2 {
  width: 420px;
  height: 320px;
  display: inline-block;
}

.m_i_1 > i,
.m_i_2 > i {
  font-size: 150px;
  margin-left: 85px;
  /* transform:rotate(-300deg) ; */
  /* animation: Safari 5s infinite; */
  /* -webkit-animation: Safari 5s infinite; */
}

.m_i_1 > a,
.m_i_2 > a {
  display: block;
  font-weight: 100;
  font-size: 32px;
  margin-top: 32px;
  width: 320px;
  text-align: center;
  bottom: 84px;
  color: #333;
}
.m_title_i{
  text-align: left;
  font-size: 22.5px;
  /* font-weight: 100; */
  line-height: 32px;
  font-weight: 800;
}
</style>