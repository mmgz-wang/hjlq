<template>
    <div class="footer">
        <router-view />
        <van-tabbar :route='false' active-color='white' inactive-color='#8B6969' :fixed='true' style="backgroundColor:black">
            <van-tabbar-item
                replace
                to="/home"
                icon="home-o"
            >
                首页
            </van-tabbar-item>
            <van-tabbar-item
                replace
                to="/Member"
                icon="vip-card-o"
            >
                会员
            </van-tabbar-item>
            <van-tabbar-item
                replace
                to="/Game"
                icon="smile-comment-o"
            >
                游戏
            </van-tabbar-item>
            <van-tabbar-item
                replace
                to="/My"
                icon="contact"
            >
                我的
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    name:'Footer',
    data(){
        return{
            active: 3
        }
    }
}
</script>
<style lang="stylus">
[class*=van-hairline]::after
    border none!important
</style>