<template>
    <!-- <div class="header">
        <van-nav-bar title="邮件" left-arrow  :fixed='true' @click-left='left()' @click-right='right()' color='black'>
            <van-icon name="search" slot="right" />
            <van-icon name="arrow-left" slot="lift" />
        </van-nav-bar>
    </div> -->
    <div class="header">  
      <van-tabs v-model="active" :swipeable='true' background='black' title-active-color='#ccc' color='#ccc' line-height='1px'>
        <van-tab v-for="item in list">
            <!-- <dl slot="title">
              <dd></dd>
              <dt><van-icon :name="item.name" /></dt>
            </dl> -->
          <div slot='title' class="solt">
            <van-icon :name="item.name" size='20px' />
            <span></span> 
          </div>
        </van-tab>
      </van-tabs>
    </div>
</template>
<script>
export default {
    name:'Header',
    props:{
      name:{
        type:String,
        defaule:'home'
      }
    },
    data(){
        return{
          active:0,
          list:[
            {
              name:'home-o',
              text:'首页'
            },
            {
              name:'bulb-o',
              text:'动态'
            },
            {
              name:'comment-o',
              text:'讯息'
            },
            {
              name:'contact',
              text:'我的'
            }
          ]
        }
    },
    methods:{
        left(){
          console.log(this.name)
          console.log('左')
          this.$router.push('/home')
        },
        right(){
            console.log('右')
        }
    },
    mounted(){
      
    }
}
</script>
<style lang="stylus" scoped>
.header
    height 50px
    .van-tabs--line
      height 50px
    .van-hairline--top-bottom::after, 
    .van-hairline-unset--top-bottom::after
      border none 
      .slot i 
        font-size 18px
      .van-tab
        line-height 55px

</style>