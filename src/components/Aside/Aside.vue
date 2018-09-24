<template>
    <div class="navigator">
        <ul class="navigator_box">
            <li class="nav_li actlon"  @click="myClick($event,'/')" @mouseenter="jinru($event)" @mouseleave="yichu($event)">
                <i class="el-icon-menu"></i>
                <label>首页</label>
                <i class="el-icon-refresh right_i" @mouseenter="right_i_jinru($event)" @mouseleave="right_i_yichu($event)" ></i>
            </li>
            <li class="nav_li " @click="myClick($event,'/yudinghys')" @mouseenter="jinru($event)" @mouseleave="yichu($event)">
                <i class="el-icon-edit-outline"></i>
                <label>预定会议室</label>
                <i class="el-icon-refresh right_i"></i>
            </li>
            <li class="nav_li" @click="myClick($event,'/wodeyd')" @mouseenter="jinru($event)" @mouseleave="yichu($event)">
                <i class="el-icon-star-on"></i>
                <label>我的预定</label>
                <i class="el-icon-refresh right_i"></i>
            </li>
            <li class="nav_li" @click="myClick($event,'/yudingsp')" @mouseenter="jinru($event)" @mouseleave="yichu($event)">
                <i class="el-icon-document"></i>
                <label>预定审批(管理员)</label>
                <i class="el-icon-refresh right_i"></i>
            </li>
            <li class="nav_li" @click="myClick($event,'/huiyisydgl')" @mouseenter="jinru($event)" @mouseleave="yichu($event)">
                <i class="el-icon-tickets"></i>
                <label>会议室预定管理(管理员)</label>
                <i class="el-icon-refresh right_i"></i>
            </li>
            <li class="nav_li" @click="myClick($event,'/huiyisgl')" @mouseenter="jinru($event)" @mouseleave="yichu($event)">
                <i class="el-icon-bell"></i>
                <label>会议室管理(管理员)</label>
                <i class="el-icon-refresh right_i"></i>
            </li>
            <li class="nav_li" @click="myClick($event,'/quyujzwgl')" @mouseenter="jinru($event)" @mouseleave="yichu($event)">
                <i class="el-icon-location"></i>
                <label>区域建筑物管理(管理员)</label>
                <i class="el-icon-refresh right_i"></i>
            </li>
            <li class="nav_li" @click="myClick($event,'/xitongsz')" @mouseenter="jinru($event)" @mouseleave="yichu($event)">
                <i class="el-icon-setting"></i>
                <label>系统设置</label>
                <i class="el-icon-refresh right_i"></i>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Aside',
        methods: {
            myClick(e, param) {
                this.$router.push(param);
                $('.color').removeClass('color');
                $('.nav_li').css("background-color", "")
                $(e.currentTarget).addClass('color');
                $(e.currentTarget).find('.right_i').css("display","block")
                $(e.currentTarget).addClass('actlon').siblings().removeClass('actlon')

                $('.ydhy').html($(e.currentTarget).find('label').html())

            },

            jinru(e) {
                if ($(e.currentTarget).hasClass('color')) {
                    $(e.currentTarget).css("background-color", "");
                    $(e.currentTarget).find('.right_i').css("display","block")
                }
            },
            yichu(e) {
                if ($(e.target).hasClass('color')) {
                    $(e.currentTarget).css("background-color", "#007aff")
                }
                $(e.currentTarget).find('.right_i').css("display","")
            },
            right_i_jinru(e){
                var ev = e.target.parentNode
                ev.style.background = '#007aff'
            },
            right_i_yichu(e){
                var el = e.target
                el.style.background = ''
            },
            myRight(e){
                $(e.target).css("display","block")
            }
        },
    };
</script>

<style>
    .navigator {
        width: 220px;
        height: 868px;
        max-width: 220px;
        font-weight: 100;
        background-color: rgb(69, 69, 69);
        font-family: "Helvetica Neue", Helvetica, "Microsoft Yahei", sans-serif;
        font-size: 14px;
    }

    .nav_li {
        width: 220px;
        height: 45px;
        font-weight: 900;
        color: #d6d5d5;
        line-height: 45px;
        padding: 0 10px;
    }
    /* .nav_li:first-child{
        background-color: #007aff;
    } */
    .actlon{
        border-right: 3px solid white;
        box-sizing: border-box;

    }

    .color {
        color: white !important;
    }
    .right_i{
        font-size: 10px;
        position: relative;
        left: 180px;
        top: -25px;
        display: none;
    }
</style>