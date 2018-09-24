<template>
  <div class="h_box">
    <img class="logo" src="../../../build/logo.png" alt="">
    <p class="project-title">会议室预定系统</p>
    <div class="path">
      <a>/</a>
      <span class="ui-state-active ydhy">预定会议室</span>
    </div>
    <div class="user-info">
      <span class="user-info-i">
        <i class="el-icon-service"></i>
        admin
      </span>
      <span class="user-info-span">管理员</span>
    </div>
    <div class="toolbar">
      <span>
        <i class="el-icon-setting"></i>退出
      </span>
    </div>
    <button class="buttom-box">
      <span>
        <i class="el-icon-search"></i> 查看当前页面对应的
        <i class="el-icon-share"></i>工作台设置 
      </span>
    </button>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .h_box {
    opacity: 1;

    height: 60px;

    line-height: 60px;

    font-weight: 100;

    /* background-color: pink; */

  }

  .logo {
    display: inline-block;
    width: 100px;
    position: relative;
    top: 6px;
  }

  .project-title {
    height: 60px;
    font-size: 18px;
    margin-left: 12px;
    position: relative;
    top: -10px;
    display: inline-block;
    color: rgb(51, 51, 51);
    font-weight: bold;
  }

  .path {
    display: inline-block;
    position: relative;
    top: -10px;
  }

  .path>a {
    display: inline-block;

    font-weight: 100;

    margin: 0 8px;
  }

  .ui-state-active {
    padding: 4px 8px;

    font-weight: 100;

    border-radius: 3px;
    background-color: #007aff;
    color: #fff;
    line-height: 60px;
    font-size: 12px;
  }

  .user-info {
    display: inline-block;
    font-size: 12px;
    font-weight: 400;
    position: relative;
    left: 1300px;
    top: -10px;
    /*  */
  }

  .user-info-i {
    width: 71px;
    /* border: 1px solid rgb(180, 175, 175); */
    /* background-color: antiquewhite; */
  }

  .user-info-span {
    width: 54px;
    /* border-top: 1px solid rgb(180, 175, 175);
    border-right: 1px solid rgb(180, 175, 175);
    border-bottom: 1px solid rgb(180, 175, 175); */
    /* background-color: antiquewhite; */
  }

  .toolbar {
    padding: 0 12px;

    position: relative;

    float: right;

    display: inline-block;

    border: none;

    height: 100%;
  }

  .toolbar>span {
    font-weight: 400;

    opacity: .8;

    margin: 0 8px;

    cursor: pointer;
  }
  .buttom-box{
    width: 288px;
    height: 30px;
    position: relative;
    top: -15px;
    left: 420px;
    background-color: #fff;
    font-weight: 300;
  }
  .buttom-box:hover{
    background-color: lightgray;
  }
</style>