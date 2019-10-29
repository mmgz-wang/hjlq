<template>
    <div class="header">
        <van-nav-bar title="邮件" left-arrow  :fixed='true' @click-left='left()' @click-right='right()'>
            <van-icon name="search" slot="right" />
            <van-icon name="arrow-left" slot="lift" />
        </van-nav-bar>
    </div>
</template>
<script>
export default {
    name:'Header',
    data(){
        return{

        }
    },
    methods:{
        left(){
            console.log('左')
        },
        right(){
            console.log('右')
        }
    }
}
</script>
<style lang="stylus" scoped>
.header
    height 47px
</style>